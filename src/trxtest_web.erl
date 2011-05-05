%% @author Mochi Media <dev@mochimedia.com>
%% @copyright 2010 Mochi Media <dev@mochimedia.com>

%% @doc Web server for trxtest.

-module(trxtest_web).
-author("Mochi Media <dev@mochimedia.com>").

-export([start/1, stop/0, loop/2]).

-define(host, "localhost").
-define(port, 5432).
-define(database, "trxtest").
-define(user, "trxtest").
-define(password, "trxtest").

%% External API

start(Options) ->
    {DocRoot, Options1} = get_option(docroot, Options),
    Loop = fun (Req) ->
                   ?MODULE:loop(Req, DocRoot)
           end,
    mochiweb_http:start([{name, ?MODULE}, {loop, Loop} | Options1]).

stop() ->
    mochiweb_http:stop(?MODULE).

loop(Req, DocRoot) ->
    "/" ++ Path = Req:get(path),
    try
        case Req:get(method) of
            'OPTIONS' ->
                case Path of
                    "hellos.json" ->
                        Req:ok({"text/plain",
                                [{"Access-Control-Allow-Origin", "*"},
                                 {"Access-Control-Allow-Methods", "POST, GET, OPTIONS"},
                                 {"Access-Control-Allow-Headers", "X-Requested-With"}],
                                []});
                    _ ->
                        Req:not_found()
                end;

            Method when Method =:= 'GET'; Method =:= 'HEAD' ->
                case Path of
                    "hellos.json" ->
                        {ok, C} = pgsql:connect(?host, ?user, ?password,
                                                [{database, ?database}, {port, ?port}]),
                        {ok, _Columns, Rows} = pgsql:squery(C, "SELECT id, name FROM atable"),
                        JsonRows = {array,
                                    [{array, [Id, Name]} || {Id, Name} <- Rows]},
                        Req:ok({"application/json", [], mochijson:encode(JsonRows)});

                    _ ->
                        Req:serve_file(Path, DocRoot)
                end;
            'POST' ->
                case Path of
                    _ ->
                        Req:not_found()
                end;
            _ ->
                Req:respond({501, [], []})
        end
    catch
        Type:What ->
            Report = ["web request failed",
                      {path, Path},
                      {type, Type}, {what, What},
                      {trace, erlang:get_stacktrace()}],
            error_logger:error_report(Report),
            %% NOTE: mustache templates need \ because they are not awesome.
            Req:respond({500, [{"Content-Type", "text/plain"}],
                         "request failed, sorry\n"})
    end.

%% Internal API

get_option(Option, Options) ->
    {proplists:get_value(Option, Options), proplists:delete(Option, Options)}.

%%
%% Tests
%%
-ifdef(TEST).
-include_lib("eunit/include/eunit.hrl").

you_should_write_a_test() ->
    ?assertEqual(
       "No, but I will!",
       "Have you written any tests?"),
    ok.

-endif.

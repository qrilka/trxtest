%% @author Mochi Media <dev@mochimedia.com>
%% @copyright 2010 Mochi Media <dev@mochimedia.com>

%% @doc trxtest.

-module(trxtest).
-author("Mochi Media <dev@mochimedia.com>").
-export([start/0, stop/0]).

ensure_started(App) ->
    case application:start(App) of
        ok ->
            ok;
        {error, {already_started, App}} ->
            ok
    end.


%% @spec start() -> ok
%% @doc Start the trxtest server.
start() ->
    trxtest_deps:ensure(),
    ensure_started(crypto),
    application:start(trxtest).


%% @spec stop() -> ok
%% @doc Stop the trxtest server.
stop() ->
    application:stop(trxtest).

%% @author Mochi Media <dev@mochimedia.com>
%% @copyright trxtest Mochi Media <dev@mochimedia.com>

%% @doc Callbacks for the trxtest application.

-module(trxtest_app).
-author("Mochi Media <dev@mochimedia.com>").

-behaviour(application).
-export([start/2,stop/1]).


%% @spec start(_Type, _StartArgs) -> ServerRet
%% @doc application start callback for trxtest.
start(_Type, _StartArgs) ->
    trxtest_deps:ensure(),
    trxtest_sup:start_link().

%% @spec stop(_State) -> ServerRet
%% @doc application stop callback for trxtest.
stop(_State) ->
    ok.

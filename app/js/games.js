/**
 * Created by samuelwaknine on 16/07/2016.
 */
//Like Java, define attributes, constructor
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Game;
    return {
        setters:[],
        execute: function() {
            Game = (function () {
                function Game(id, home, away, stadium) {
                    this.id = id;
                    this.home = home;
                    this.away = away;
                    this.stadium = stadium;
                }
                return Game;
            }());
            exports_1("Game", Game);
        }
    }
});
//# sourceMappingURL=games.js.map
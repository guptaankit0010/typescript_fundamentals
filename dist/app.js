"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function GetRating(title) {
    if (title == 'A new hope')
        return 'Calssic';
    return Math.round((Math.random() * 10));
}
function PrintMovieInfo(title, releaseYear) {
    var cast = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        cast[_i - 2] = arguments[_i];
    }
    console.log("Title = ".concat(title));
    if (releaseYear) {
        console.log("Release year = ".concat(releaseYear));
    }
    for (var _a = 0, cast_1 = cast; _a < cast_1.length; _a++) {
        var name_1 = cast_1[_a];
        console.log("cast : ".concat(name_1));
    }
}
PrintMovieInfo("movie 1", 1976);
var castMembers = ["hen", "cat"];
PrintMovieInfo.apply(void 0, __spreadArray(["movie 2", 1987], castMembers, false));
var movieName = "A new hopsse";
var movieRating = GetRating(movieName);
console.log(movieRating);

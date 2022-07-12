"use strict";
exports.__esModule = true;
var data = require("./data.js");
var usersInfo = data.usersInfo, scoresInfo = data.scoresInfo;
console.time("merge data");
for (var i = 0; i < usersInfo.length; i++) {
    var user = usersInfo[i];
    for (var j = 0; j < scoresInfo.length; j++) {
        var score = scoresInfo[j];
        if (user.uid == score.uid) {
            user.score = score.score;
            user.comments = score.comments;
            user.stars = score.stars;
        }
    }
}
console.timeEnd("merge data");
console.log(usersInfo);

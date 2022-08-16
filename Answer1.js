import {matchData} from './Project.js'
let matchPlayed = {}
//1. Number of matches played per year of all the years in IPL.
matchData.forEach(match => {
    if (matchPlayed[match.season]) {
        matchPlayed[match.season] += 1
    }
    else {
        matchPlayed[match.season] = 1
    }
})
console.log("Number of matches played per year\n",matchPlayed)
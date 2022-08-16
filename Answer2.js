import {matchData} from './Project.js'
let matchWon = {}
matchData.forEach(match => {
    if (match.winner !== '') {
        if (matchWon[match.winner]) {
            matchWon[match.winner] += 1
        }
        else {
            matchWon[match.winner] = 1
        }
    }
})
console.log("Number of matches won of all team over all the years of IPL\n",matchWon)
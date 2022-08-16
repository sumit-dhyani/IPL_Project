// import csv from 'csvtojson' 
// (async()=>{
//     const matches=await csv().fromFile("matches.csv");
//     console.log("Matches Data:",matches)
// })();
/*********************************************************************************************************************/


import fs from 'fs'; 
const file = fs.readFileSync('matches.csv', 'utf-8') //filereader used for reading from csv file

const lines = file.trim('\n').split('\n'); // splitted into array of each line.
lines.shift() /// removed the header line
const matchData = []
lines.forEach((line) => {
    line = line.split(',')
    
    const match = { id: line[0], season: line[1], city: line[2], date: line[3], team1: line[4], team2: line[5], toss_winner: line[6], toss_decision: line[7], result: line[8], dl_applied: line[9], winner: line[10], win_by_runs: line[11], win_by_wickets: line[12], player_of_match: line[13], venue: line[14], umpire1: line[15] !== '' ? line[15] : 'none', umpire2: line[16] !== '' ? line[16] : 'none', umpire3: line[17] !== '' ? line[17] : 'none' }
    
    matchData.push(match)
})
//uncomment the below line to show all the records from matches.csv on console
// console.log(matchData)


const file2=fs.readFileSync('deliveries.csv','utf-8')
const data=file2.trim("\n").split('\n')
data.shift()
const deliveryData=[]
data.forEach(el=>{
    el=el.split(',')
    const delivery={match_id:el[0],inning:el[1],batting_team:el[2],bowling_team:el[3],over:el[4],ball:el[5],batsman:el[6],non_striker:el[7],bowler:el[8],is_super_over:el[9],wide_runs:el[10],bye_runs:el[11],legbye_runs:el[12],noball_runs:el[13],penalty_runs:el[14],batsman_runs:el[15],extra_runs:el[16],total_runs:el[17],player_dismissed:el[18],dismissal_kind:el[19],fielder:el[20]}
    deliveryData.push(delivery)
})
//uncomment the below line to output data to console from delivery csv file
// console.log(deliveryData)

export {matchData,deliveryData};
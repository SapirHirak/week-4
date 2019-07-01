let timeNow = new Date()
console.log(timeNow)


const moment = require('moment')
const reques = require('request')
let formattedTimeNow = moment().format("MMMM Do, YYYY")
console.log(formattedTimeNow) //January 3rd, 2017

const request = require('request')

// request('http://data.nba.net/10s/prod/v1/2016/players.json', function(err, response){
//     console.log(response)
// })

request("http://www.omdbapi.com/?i=tt3896198&apikey=cf50d4dd&t=The_Lion_King", function (err , response) {

console.log(response.Released)
})

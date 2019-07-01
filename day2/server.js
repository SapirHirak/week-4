

const express = require('express')

const app = express()
const port = 3000

app.get('/', function (request, response) {
    console.log("Someone has come into the server. Brace yourselves.")
    response.send("Ending the cycle, thanks for visiting")
})



app.get('/', function (request, response) {
    console.log("Someone has come into the server. Brace yourselves.")
    response.send("Ending the cycle, thanks for visiting")
})

app.get('/maps', function (request, response) {
    response.send("Here's some stuff related to maps")
})

app.get('/shoobi', function (request, response) {
    response.send("This here is the shoobi *route*")
})
app.get('/life', function (request, response) {
    response.send("42")
})
const users = {
    tilda: "You've done a wonderful job",
    riva: "You need to improve your form, but good perseverance",
    jeremy: "You're incredible"
}

app.get('/users/:userID', function (request, response) {
    response.send(users[request.params.userID])
})

app.get('/routeWithOptionalParameters', (request, response) => {
    let params = request.query
    response.send(params)
})
app.get('/details', (request, response) => {
    let params = request.query
    console.log(params.city)

    response.send(params)
})
app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})

const consts = require('./consts')

let handleComplaints = function (complaint) {
    if (complaint.type = consts.obj.FINANCE)
        console.log("Money doesn't grow on trees, you know.")
    if (complaint.type = consts.obj.WEATHER)
        console.log("It is the way of nature. Not much to be done")
    if (complaint.type = consts.obj.EMOTIONS)
        console.log("It'll pass, as all things do, with time.")
}

module.exports.handleComplaints = handleComplaints

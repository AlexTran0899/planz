const db = require('../data/db-config')

function getAllRequest() {
    console.log("here")
    return db('eRequest')
}

function createNewRequest(data) {
    return db('eRequest').insert(data, ["*"])
}

module.exports = {
    getAllRequest,
    createNewRequest
}
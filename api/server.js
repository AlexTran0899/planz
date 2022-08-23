const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const eRequests = require('./eRequest/eRequest-router')

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/eRequests', eRequests)

server.use((err, req, res) => {
    res.status(500).json({
        message: err.message,
        stack: err.stack
    })
})

module.exports = server

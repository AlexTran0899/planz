const router = require('express').Router()
const eRequest = require('./eRequest-model')

router.get('/getall', (req,res,next) => {
    eRequest.getAllRequest()
    .then(data => res.json(data))
    .catch(next)
})

router.post('/createRequest', (req,res,next) => {
    const data = req.body
    eRequest.createNewRequest(data)
    .then(data => res.json(data))
    .catch(next)
})

module.exports = router
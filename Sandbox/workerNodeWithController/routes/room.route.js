const express = require('express');
const router = express.Router();
const rooms = [];
const workerControllers = require('../controllers/workers.controller')


router.post('/', (req, res) => {

}).get('/:workerId', (req, res) => {

    // const user = await fetch('http://localhost:8080/api/workers/1')

    const worker = workerControllers.getWorkerById(req, res);
    res.send(worker)
    console.log(worker)
    return res.send("ok")
})

module.exports = router;

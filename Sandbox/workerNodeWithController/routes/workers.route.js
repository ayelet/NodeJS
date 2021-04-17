const express = require('express');
const router = express.Router();
const workerController = require('../controllers/workers.controller')

router.post('/', (req, res) => {
    workerController.addWorker(req, res);
}).get('/', (req, res) => {
    workerController.getWorkers(req, res);
}).get('/:workerId', (req, res) => {
    workerController.getWorkerById(req, res);
})

module.exports = router;

const express = require('express');
const router = express.Router();
const sseController = require('../controllers/sse-API.js')


//To get all patient using websocket
router.get('/getRealtime',sseController.getRealtime)

module.exports =router
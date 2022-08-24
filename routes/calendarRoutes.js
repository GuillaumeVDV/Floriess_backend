const express = require('express');

const path = require('path');

const calendarController = require('../controllers/calendarController');

const router = express.Router();


router.get('/', calendarController.getCalender);


router.get('/add-date', calendarController.getAddDate);
router.post('/add-date', calendarController.postAddDate);


module.exports = router;
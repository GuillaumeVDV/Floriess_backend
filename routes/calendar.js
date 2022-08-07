const express = require('express');

const path = require('path');

const router = express.Router();

router.get('/calendar', (req, res, next) => {

 res.sendFile(path.join(__dirname, '../', 'views', 'calendar.html'));

});

module.exports = router;
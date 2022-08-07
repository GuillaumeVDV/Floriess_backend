const path = require('path');
const express = require('express');

const router = express.Router();

router.get('/add-date', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'admin.html'));
  });


module.exports = router;
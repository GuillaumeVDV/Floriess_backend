const path = require('path');
const express = require('express');
const rootDir = require('../util/path');

const router = express.Router();

router.get('/add-date', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'admin.html'));
  });


module.exports = router;
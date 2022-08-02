const express = require('express');

const router = express.Router();

router.post('/add-date', (req, res, next) => {
    console.log('This is a user page!');
    res.send('<h1>The User" Page</h1>');
  });


module.exports = router;
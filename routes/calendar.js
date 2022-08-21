const express = require('express');

const path = require('path');

const router = express.Router();
const dates = [];


router.get('/', (req, res, next) => {
 
 res.render('calendar', {pageTitle: 'Kalender', dates: dates});
 console.log(dates);
});

router.get('/add-date', (req, res, next) => {
    
    
 res.render('add-date', {pageTitle: 'Datum toevoegen'});

} );

router.post('/add-date', (req, res, next) => {
    dates.push({date : req.body.date, start : req.body.start, end : req.body.end});
    res.redirect('/');
} );


module.exports = router;
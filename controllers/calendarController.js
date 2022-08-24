const Date = require('../models/Date');

exports.getAddDate = (req, res, next) => {
    
    res.render('add-date', {pageTitle: 'Datum toevoegen'});

}

exports.postAddDate = (req, res, next) => {

    const date = new Date(req.body.day,  req.body.start, req.body.end);
    date.addDate();
    res.redirect('/');

}


exports.getCalender = (req, res, next) => {
    const dates = Date.getDates();
    res.render('calendar', {pageTitle: 'Kalender', dates: dates});
    console.log(dates); 
}
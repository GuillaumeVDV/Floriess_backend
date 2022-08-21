const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

const calendarRoutes = require('./routes/calendar');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',calendarRoutes);

app.use((req, res, next) => {
  res.status(404).send('<h1>Page not found</h1>');
});

app.listen(3000);

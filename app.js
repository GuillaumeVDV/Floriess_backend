const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

const calendarRoutes = require('./routes/calendarRoutes');
const errorController = require('./controllers/errorController');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',calendarRoutes);
app.use(errorController.get404);

app.listen(3000);

const express = require('express');

const app = express();


app.use('/Users', (req, res, next) => {
  console.log('This is a user page!');
  res.send('<h1>The User" Page</h1>');
});

app.use('/', (req, res, next) => {
  console.log('In another middleware!');
  res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);

const express = require('express');
const path = require('path');
const exhbs = require('express-handlebars');

const app = express();

const port = process.env.PORT || 3000;

// Set handlebar middleware
app.engine('handlebars', exhbs());
app.set('view engine', 'handlebars');

// Set handlebar routes
app.get('/', (req, res) => {
  res.render('home', {
    stuff: 'This is stuff'
  });
});

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})
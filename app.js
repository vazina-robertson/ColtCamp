const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res)
{
    res.render('landing');
});

app.listen(process.env.PORT || 3000, process.env.IP || 'localhost', function()
{
  console.log('The ColtCamp server has started!');
});

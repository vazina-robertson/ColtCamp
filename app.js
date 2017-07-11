const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res)
{
    res.render('landing');
});

app.get('/campgrounds', function(req, res)
{
  const campgrounds = [
    {name: 'ABC Lodge', image:'paul-itkin-46106.jpg'},
    {name: 'Bobcat Exit', image:'teddy-kelley-181683.jpg'},
    {name: 'Owl Creek', image:'ales-krivec-18049.jpg'},
    {name: 'Longhorn Rest', image:'joshua-ness-109299.jpg'}
  ];

  res.render('campgrounds', {campgrounds:campgrounds});
});

app.listen(process.env.PORT || 3000, process.env.IP || 'localhost', function()
{
  console.log('The ColtCamp server has started!');
});

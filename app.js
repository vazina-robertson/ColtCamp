const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

const campgrounds = [
  {name: 'ABC Lodge', image:'paul-itkin-46106.jpg'},
  {name: 'Bobcat Exit', image:'teddy-kelley-181683.jpg'},
  {name: 'Owl Creek', image:'ales-krivec-18049.jpg'},
  {name: 'Longhorn Rest', image:'joshua-ness-109299.jpg'}
];

app.get('/', function(req, res)
{
  res.render('landing');
});

app.get('/campgrounds', function(req, res)
{
  res.render('campgrounds', {campgrounds:campgrounds});
});

app.post('/campgrounds', function(req, res)
{
  res.send('post route');
  //get data from form & add to campgrounds array
  const name = req.body.name;
  const image = req.body.image;
  const newCampground = {name: name, image: image};
  campgrounds.push(newCampground);
  //redirect back to campground page
  res.redirect('/campgrounds');
});

app.get('/campgrounds/new', function(req, res)
{
  res.render('new.ejs');
});

app.listen(process.env.PORT || 3000, process.env.IP || 'localhost', function()
{
  console.log('The ColtCamp server has started!');
});

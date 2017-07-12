// Routers are defined here

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

const campgrounds = [
  {name: 'ABC Lodge', image:'http://www.thingsyouneedforcamping.com/wp-content/uploads/2016/11/camping.jpg'},
  {name: 'Bobcat Exit', image:'http://res.cloudinary.com/simpleview/image/upload/v1460743623/clients/roanoke/Roanoke_Camping_0834e03c-8e39-4cb2-9365-47120180f959.jpg'},
  {name: 'Owl Creek', image:'https://recreation-acm.activefederal.com/assetfactory.aspx?did=6787'},
  {name: 'Longhorn Rest', image:'https://www.leadingcampings.com/media/1400_x_474/293135a0-90a3-4b2f-bffe-80377b3543fa/la-marina-camping-resort-in-spain.jpg'},
  {name: 'ABC Lodge', image:'http://www.thingsyouneedforcamping.com/wp-content/uploads/2016/11/camping.jpg'},
  {name: 'Bobcat Exit', image:'http://res.cloudinary.com/simpleview/image/upload/v1460743623/clients/roanoke/Roanoke_Camping_0834e03c-8e39-4cb2-9365-47120180f959.jpg'},
  {name: 'Owl Creek', image:'https://recreation-acm.activefederal.com/assetfactory.aspx?did=6787'},
  {name: 'Longhorn Rest', image:'https://www.leadingcampings.com/media/1400_x_474/293135a0-90a3-4b2f-bffe-80377b3543fa/la-marina-camping-resort-in-spain.jpg'}

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
  //res.send('post route');
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

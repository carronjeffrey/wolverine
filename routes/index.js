var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Us' });
});

router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', { title: 'Portfolio' });
});

router.get('/clients', function(req, res, next) {
  res.render('clients', { title: 'Client Login' });
});

module.exports = router;

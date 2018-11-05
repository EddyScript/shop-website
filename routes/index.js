var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var assert = require('assert');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('shop/index', { title: 'Shopping cart!' });
});

router.get('/user/signup', function(req, res, next){
  res.render('user/signup')
});

router.post('/user/signup', function(req, res, next){
  res.redirect('/');
});

module.exports = router;

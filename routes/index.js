var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'SnowPlow', page: 'index' });
});

router.get('/jobs', function(req, res, next) {
  res.render('index', { title: 'SnowPlow - Jobs', page: 'jobs' });
});

router.get('/users', function(req, res, next) {
  res.render('index', { title: 'SnowPlow - Users', page: 'users' });
});

router.get('/settings', function(req, res, next) {
  res.render('index', { title: 'SnowPlow - Settings', page: 'settings' });
});

module.exports = router;

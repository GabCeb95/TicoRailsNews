var express = require('express');
var router = express.Router();
var rss = require('./libs/rss');
var ctrlNews = require('../controllers/news.controller.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  rss.read('http://www.nacion.com/rss/latest/?contentType=NWS',function(result){
    ctrlNews.createNewsItem(result,res);
});
});

module.exports = router;

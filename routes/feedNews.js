/*
* TicoRails Router
*/

var express = require('express');
var router = express.Router();
var rss = require('./libs/rss');
var ctrlNews = require('../controllers/news.controller.js');

// NEWS ROUTES

router.get('/news', function(req, res, next) {
  rss.read('http://www.nacion.com/rss/latest/?contentType=NWS',function(result){
    ctrlNews.createNewsItem(result,res);
	res.status(201).json(result);
  })}
);

router.get('/listNews',ctrlNews.listAll);


module.exports = router;
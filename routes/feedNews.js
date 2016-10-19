/*
* TicoRails Router
*/

var express = require('express'),
	router = express.Router(),
	ctrlNews = require('../controllers/news.controller.js');

// NEWS ROUTES

router.post('/news/',ctrlNews.createNewsItem);


module.exports = router;
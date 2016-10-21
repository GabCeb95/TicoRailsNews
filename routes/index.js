var express = require('express');
var router = express.Router();
var ctrlNews = require('../controllers/news.controller.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tico Rails News, fetching the latest Train related news in Costa Rica' });
}
);

module.exports = router;

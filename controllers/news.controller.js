/*
* News Controller
*/
require('../models/news.model.js');
var mongoose = require('mongoose'),
	News = mongoose.model('NewsItem');


module.exports.createNewsItem = function FeedNews(req,res) {
    

    for(var i=0; i<req.length; i++){

        var newsItem = new News();

        newsItem.title = req[i].title
        newsItem.date = req[i].date
        newsItem.text = req[i].text
        newsItem.source = req[i].source

        newsItem.save(function(err){
            if(err){
                res.status(404).json({error:err});
            }else{
                res.status(201).json(newsItem);
            }
        });
    }


    /*myJsonString.forEach(function(element) {
        var newsItem = new News();

        newsItem.title = element.title
        newsItem.date = element.date
        newsItem.text = element.text
        newsItem.source = element.source

        console.log(element + ' \n');
        console.log('***********************************************\n');
        console.log('***********************************************\n');

        newsItem.save(function(err){
        if(err){
            res.status(404).json({error:err});
        }else{
            res.status(201).json(newsItem);
        }

        });
        
    }, this);*/
};
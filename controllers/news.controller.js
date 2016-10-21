/*
* News Controller
*/
require('../models/news.model.js');
var mongoose = require('mongoose'),
	News = mongoose.model('NewsItem');


module.exports.createNewsItem = function FeedNews(req,res) {
    
    mongoose.connection.collections['news'].drop( function(err) {
        console.log('news dropped');
    });

    for(var i=0; i<req.length; i++){

        console.log('\nStarted ****\n');
        var newsItem = new News();

        newsItem.title = req[i].title
        newsItem.date = req[i].date
        newsItem.text = req[i].text
        newsItem.source = req[i].source

        console.log('Created ****\n');

        newsItem.save(function(err){
            /*if(err){
			    res.status(404).json({error:err});
		    }else{
			    res.status(201).json(newsItem);
		    }*/
        });
        console.log('Saved ****\n');
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

module.exports.listAll = function listAll(req,res) {
	News.find().exec(function(err,data){
		res.status(200).json(data);
	});
};
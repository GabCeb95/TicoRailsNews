var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var CronJob = require('cron').CronJob;

var dbURL = 'mongodb://ticorailsdbo:root12345@ds041506.mlab.com:41506/ticorailsdb';

var routes = require('./routes/index.js');
var feedNews = require('./routes/feedNews.js');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('port', ( 3000));

mongoose.connect(dbURL);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/feedNews', feedNews);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


var job = new CronJob('*/10 * * * * *', function() {
    console.log('Init \n');
  }, function () {
    console.log('End \n');
  },
  true // Start the job right now 
  //timeZone // Time zone of this job. 
);


app.listen(app.get('port'),function(){
	console.log('Server running on port '+app.get('port'));
  console.log('TicoRails News running....')
});
module.exports = app;

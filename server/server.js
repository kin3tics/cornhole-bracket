require('babel-register');

var path = require('path');
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser'); 
var compression = require('compression'); 
var sassMiddleware = require('node-sass-middleware');
//var favicon = require('serve-favicon'); 
//var logger = require('morgan'); 
var async = require('async'); 

var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var RouterContext = require('react-router').RouterContext;
var swig = require('swig');

var config = require('./config');
var routes = require('../app/routes');

var bracketsRouter = require('./api/bracketsRouter');
var gamesRouter = require('./api/gamesRouter');
var teamsRouter = require('./api/teamsRouter');

var app = express();

app.set('port', process.env.PORT || 3000); 
app.use(compression()); 
//app.use(logger('dev')); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false })); 

/*app.use(sassMiddleware({
	src: 'app/sass',
	dest: '/build/styles',
	debug: true,
	force: true,
	outputstyle: 'nested',
	prefix: '/styles'
}))*/
app.use(express.static("build")); 

mongoose.connect(config.database);
mongoose.connection.on('error', function() {
	console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
});

app.use('/api/brackets', bracketsRouter);
app.use('/api/games', gamesRouter);
app.use('/api/teams', teamsRouter);

//regular routing
app.use(function(req, res) { 
	Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) { 
	    if (err) { 
	      res.status(500).send(err.message) 
	    } else if (redirectLocation) { 
	    	console.info("redirecting to" + redirectLocation);
	      res.status(302).redirect(redirectLocation.pathname + redirectLocation.search) 
	    } else if (renderProps) { 
	        var html = ReactDOM.renderToStaticMarkup(React.createElement(RouterContext, renderProps)); 
	        var page = swig.renderFile('views/index.html', { html: html }); 
	        res.status(200).send(page); 
	    } else { 
	      res.status(404).send('Page Not Found') 
	    } 
  	}); 
}); 

var server = require('http').createServer(app);
server.listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});
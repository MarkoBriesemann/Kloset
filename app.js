
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , everyauth = require('everyauth')
  , async = require('async')
  , path = require('path');

var dbcss = require('./modul_db');

var app = express();



// all environments
app.configure(function() {
	app.set('port', process.env.PORT || 8080);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'ejs');
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.bodyParser());				// Automatically parses form data
	app.use(express.methodOverride());
	app.use(everyauth.middleware(app));
	app.use(express.cookieParser('your secret here'));
	app.use(express.session({secret: "90ndsj9dfdsf"}));
	app.use(app.router);
	app.use(require('stylus').middleware(__dirname + '/public'));
	app.use(express.static(path.join(__dirname, 'public')));
});

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}



//app.get('/', routes.index);
app.get('/users', user.list);

app.get('/', function(req, res){
	console.log("run root.");
	dbcss.createCSS();
	res.render('scroll_gallery', { title: 'Express' });
});


console.log("body1 " );
app.post('/send_criteria', function(req, res) {
	  //res.send('You sent the name "' + req.body.color + '".');

	  console.log("body style: " + req.body.style);
	  console.log("body color: " + req.body.color);
	  
	  dbcss.createCSS(req.body.color);
	  //res.render('scroll_gallery_'+ req.body.color , { name: req.body.color });
	//next();
});



app.get('/filter', function(req, res){
	console.log("run filter.");
	console.log("app.get: body style: " + req.body.style);
	console.log("app.get: body color: " + req.body.color);
	res.render('scroll_gallery_filter', { title: 'Express' });	
});


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
  console.log("body2 " ); 
});



var mysql      = require('mysql');
var fs = require('fs');
var CSSFILE_DEFAULT = "./public/stylesheets/gallery_scroll.css";
var CSS_TEMPLATE = "./public/stylesheets/stylesheet.css";
var HTML_TEMPLATE1 = "./views/scroll_gallery_template1.txt";
var HTML_TEMPLATE2 = "./views/scroll_gallery_template2.txt";
var HTML_VIEW      = "./views/scroll_gallery.ejs";
var HTML_VIEW_filter  = "./views/scroll_gallery_filter.ejs";
		
		


createCSS = function(color, callback) {
	
	var temp_data;
		
	console.log("f.createCSS: color :" + color );
	// read gallery css file, which is going to be extended with pictures in the db
	var css_data;
	fs.readFile(CSS_TEMPLATE,'utf8', function (err, data) {
	  if (err) throw err;
	  fs.writeFileSync(CSSFILE_DEFAULT, data);    
	});
	
	fs.readFile(HTML_TEMPLATE1,'utf8', function (err, data) {
	  		if (err) throw err;
	  		fs.writeFileSync(HTML_VIEW, data); 
	  		temp_data = data;
	  		console.log("write 1");    
	});

		
	var temp2 = fs.readFileSync(HTML_TEMPLATE2,'utf8');

	// add root
	
	var connection = mysql.createConnection({
	  user     : 'me2',
	  password : 'st',
	  database : 'kloset'
	});

	connection.connect();
	var query = "";
// create query
	if (color) {
	 	console.log("choosen color: " + color);
	 	query = 'SELECT id, name, pic_add from clothes where color=\'' + color +'\';';
	 	
	
	} else {
		console.log("no color: ");
		query = 'SELECT id, name, pic_add from clothes;';

	}
	
	console.log("html_view " + HTML_VIEW);
	console.log('query: ' + query);

	// add query: INSERT INTO users (USER_ID,email,password,name) VALUES (1, 'peter@gmail.com', 'p','peter');
	// if user does not exist (facebook, twitter, login etc
	
	var temp_query = "";
	//connection.query('SELECT id, name, pic_add from clothes;', function(err, rows, fields) {
	connection.query(query, function(err, rows, fields) {
	  if (err) throw err;
	  else {
		for (var i in rows) {
			var sql = rows[i];
			var css = "#contentPicture" + sql.id + "{background-image:url(\'" + sql.pic_add + '\');}';

			var html_pic = "<img src=\'" + sql.pic_add + "\' alt=\'Photo " + sql.id + "\'>";
			console.log(" html : " + html_pic);
			fs.appendFile(HTML_VIEW, html_pic);
			console.log("write 2"); 
			temp_query = temp_query + html_pic;
		
			console.log(html_pic);
			fs.appendFile(CSSFILE_DEFAULT, css);
		}
		
		fs.appendFile(HTML_VIEW, temp2);
		console.log("write 3");			
	  }
	  console.log("query total: " + temp_query);
	  temp_data = temp_data + temp_query + temp2;
	  //console.log("html filter: " + temp_data);
	  	
	  	fs.writeFile(HTML_VIEW_filter, temp_data, function (err) {
  		//	if (err) throw err;
  			//console.log('query on ' + color + ' is saved!');
  		});
	});
	connection.end();
};

exports.createCSS = createCSS;

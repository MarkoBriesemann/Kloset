var mysql      = require('mysql');
var fs = require('fs');
var CSSFILE_DEFAULT = "./public/stylesheets/gallery_scroll.css";
var CSS_TEMPLATE = "./public/stylesheets/stylesheet.css";

createCSS = function(callback) {

var css_data;
fs.readFile(CSS_TEMPLATE,'utf8', function (err, data) {
  if (err) throw err;
  fs.writeFileSync(CSSFILE_DEFAULT, data);    
});

var connection = mysql.createConnection({
  user     : 'me2',
  password : 'st',
  database : 'kloset'
});

connection.connect();

connection.query('SELECT id, name, pic_add from account;', function(err, rows, fields) {
  if (err) throw err;
  else {
/*    var sql_res = rows[1];
    console.log(sql_res.id +' : '+ sql_res.pic_add); 
    console.log('The solution is: ', rows[0]);
   
    console.log('The solution is: ', JSON.stringify(rows).split("\""));
  */  
    for (var i in rows) {
	var sql = rows[i];
	var css = "#contentPicture" + sql.id + "{background-image:url(\'" + sql.pic_add + '\');}';
	console.log(css);
	fs.appendFile(CSSFILE_DEFAULT, css);
    }
  }
});

connection.end();

};

exports.createCSS = createCSS;

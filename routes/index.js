
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('scroll_gallery', { title: 'Express' });
};
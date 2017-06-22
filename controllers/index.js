/*show home page*/
exports.showHomePage = function(req, res){
	res.render('home/index', {title: "Tâm sự gia đình"});
}

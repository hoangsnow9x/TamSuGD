var Category = require('../models/category');
var Sub = require('../models/sub_menu');
/*show admin page*/
exports.showAdminPage = function(req, res){
	res.render('admin/index', {title: "Trang quản trị"});
}

/*show news page control*/
exports.addNews = function(req, res){
	res.render('admin/news/add', {title: "Thêm mới tin tức"});
}

exports.listNews = function(req, res){
	res.render('admin/news/list', {title: "Danh sách tin tức"});
}

/*show category page control*/
	// show interface
exports.addCategory = function(req, res){
	res.render('admin/category/add', {title: "Quản trị danh mục"});
}
	// get all categories
exports.showCategoryPage = function(req, res){
	res.render('admin/category/list', {title: "List danh mục"});

}

exports.getCate = function(req, res){
	Category.find().exec(function(err,data){
		if(err){
			console.log(err);
		}else{
			// console.log(data);
			res.json(data);
		}
	});
}


	// get all sub menu
exports.listSub = function(req, res){
	Sub.find().exec( function(err,data){
		if(err){
			console.log(err);
		}else{
			// var code = [];
			// for(var i= 0; i < data.length ; i++){
			// 	code.push(data[i].category);
			// }
			// Category.find({code: {$in: code}}).exec(function(err, cates){
				
			// });
			res.render('admin/category/list_sub', {title: " Danh mục con", data: data});
		}
	});
}


	// post category
exports.postCategory = function(req, res){
	// console.log(req.body);
	var newCategory = new Category();
	newCategory.title = req.body.title;
	newCategory.created = Date.now();

	newCategory.save(function(err, data){
		if(err){
			res.send("* Không thể thêm danh mục.");
		}else {
			// console.log(data);
			res.send("* Thêm danh mục thành công.");
		}
	});
}
	// delete category
exports.delCategory = function(req, res){
	var id= req.params.id;
	console.log(id);
	Category.find({ _id:id }).remove().exec(function(err){
		if(err){
			res.send("* Không thể xóa danh mục.")
		}else {
			res.send("* Xóa danh mục thành công.")
		}

	});
}

	// post submenu
exports.addSub = function(req, res){
	console.log(req.body);
	var newSub = new Sub();
	newSub.title = req.body.title;
	newSub.category = req.body.category;
	newSub.code = req.body.code;


	newSub.save(function(err, data){
		if(err){
			res.send("* Không thể thêm danh mục.");
		}else {
			console.log(data);
			res.send("* Thêm danh mục thành công.");
		}
	});
}
	// get sub menu
// exports.listSubmenu = function(req, res){
// 	Sub.find().exec(function(err,data){
// 		if(err){
// 			console.log(err);
// 		}else{
// 			// console.log(data);
// 			res.json(data);
// 			console.log(data);
// 		}
// 	});
// }



/*show member page control*/
exports.listUsers = function(req, res){
	res.render('admin/users/list', {title: "Quản lý thành viên"});
}

/*show feedback page control*/
exports.feedback = function(req, res){
	res.render('admin/feedback/list', {title: "Quản lý phản hồi"});
}
var express = require('express'),
	router 	= express.Router();

// include controller
var Admin  = require('../controllers/admin.js');
// import Admin from '../controllers/admin.js';

router.get('/', Admin.showAdminPage)

	  .get('/category/add', Admin.addCategory)
	  .get('/category/listcate', Admin.getCate)
	  .get('/category/list', Admin.showCategoryPage)
	  .get('/category/list_sub', Admin.listSub)
	  // .get('/category/listSubmenu', Admin.listSubmenu)

	  .get('/news/add', Admin.addNews)
	  .get('/news/list', Admin.listNews)

	  .get('/users/list', Admin.listUsers)
	  .get('/feedback', Admin.feedback)

	  .post('/category/add', Admin.postCategory)
	  .post('/category/list_sub', Admin.addSub)

	  .delete('/category/:id', Admin.delCategory)

module.exports = router;

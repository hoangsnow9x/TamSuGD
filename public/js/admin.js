angular.module('myApp', [])
.controller('myController', ['$scope',  '$http', function($scope,  $http){
	/*Category action*/
		// get list category
	var listCategory = function(){
		$http.get('/admin/category/listCate').then(function(res){
			$scope.Category = res.data;
		});
	}
	listCategory();
		// upload category
	$scope.btnUploadCate = function() {
		$http.post('/admin/category/add', $scope.cate).then(function(res){
			alert(res.data);
		});
	}
		// edit category
	$scope.delCategory = function(id){
		// alert(id);
		$http.delete('/admin/category/' + id).then(function(res){
			alert(res.data);
			listCategory();
		});

	}

	var getSubmenu = function() {
		$http.get('/admin/category/list_sub').then(function(res){
			$scope.Submenu = res.data;
			console.log(res.data);
		});
	}

		// upload sub menu
	$scope.btnUploadSub = function(){
		// console.log($scope.category)
		console.log($scope.sub);
		$http.post('/admin/category/list_sub', $scope.sub).then(function(res){
			alert(res.data);

		});
	}


}]);
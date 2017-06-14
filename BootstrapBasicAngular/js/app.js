angular.module('store',[])

.controller('storeController', ['$scope','$http', function($scope,$http){
	$http.get('products.json').success(function(products){
		$scope.products = products;
	}).error(function(){
		//Adding Dummy data as for AJAX wont work in some browsers over file protocol
		$scope.products = [{name:"Soccerball",description:"FIFA approved size and weight",category:"Soccer",price:19.95,id:"60d4f82c7f41b87e"},{name:"Corner Flags",description:"Give your playing field a personal touch",category:"Soccer",price:34.95,id:"753b6488e4275863"},{name:"Stadium",description:"Flat packed 35,000 seat stadium",category:"Soccer",price:79500,id:"e8fe85eab1f9b913"},{name:"Thinking Cap",description:"Improve your brain efficiency by 75%",category:"Chess",price:16,id:"e8c4a582043c799b"},{name:"Human Chess Board", description:"A fun game for the family",category:"Chess",price:73,id:"c250633930fbc987"},{name:"Bling Bling King",description:"Gold plated diamond studded King",category:"Chess",price:1200,id:"6ff650c49a356a61"}];

	});
	$scope.item = {}; // Initializing to avoid unexpected errors
	$scope.removeMe = function(ind){
		$scope.products.splice(ind,1);
	}

	$scope.addItem = function(){
		if(!$scope.item.name || !$scope.item.price){
			alert("Please enter name and price both");
			return;
		}
		if(isNaN($scope.item.price)){
			alert("Please enter valid price");
		}
		$scope.products.push($scope.item);
		$scope.item = {};
	}
}])
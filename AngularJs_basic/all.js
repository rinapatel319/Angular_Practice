var searchPeopleApp = angular.module("searchPeopleApp",[]);

searchPeopleApp.controller("SearchPeopleCtrl",function($scope,peopleData){
	$scope.disableBtn =false;
	$scope.personData = function(person){
		if($scope.person){
			delete $scope.person.selected;
		}
		$scope.person = person;
		$scope.person.selected = true;
	};

	$scope.initMemberSearch = function(){
		$scope.disableBtn = "disabled";
		var promise = peopleData.getData();
		promise.then(function(data){
			$scope.people = data;
			$scope.dataError = false;
		},function(status){
			$scope.dataError = true;
			$scope.disableBtn = false;
		});
	};
});


searchPeopleApp.factory("peopleData", function($http,$q){
	return {
		getData:function(){
		var deferred = $q.defer();
		$http({method:"GET", url:'people.json'}).
			success(function(data){
				deferred.resolve(data);
			}).error(function(data,status){
				deferred.reject(status);
			});
			return deferred.promise;
		}
	}	
});
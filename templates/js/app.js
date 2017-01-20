angular.module('myApp',['ui.bootstrap'])
    .factory('myInterceptor',function($q){
	return {
	    request:function(config){
		console.log(config.headers);
		console.log(config.url);
		return config;
	    },
	    response:function(response){
		return response;
	    },
	    requestError:function(rejection){
		return rejection;
	    },
	    responseError: function(rejection){
		return rejection;
	    },
	}
    })
    .config(function($httpProvider){
	$httpProvider.interceptors.push('myInterceptor');
    })
    .directive("myCounter",function(){
     return{
	 restrict:"EA",
	 replace:true,
	 scope: {},
	 controller:['$scope','$http',function($scope,$http){
	     $scope.count= 0;
	     var update= function (count,increment){
		 return count+increment;
	     }
	     $scope.addfunc=function(){
		 count=update($scope.count,1);
		 $scope.count=count;
		 $http.get('http://192.168.0.5:8800/api').then(function(response){
		 });
		 $http.post('http://192.168.0.5:8800/api').then(function(response){
		 });
		 $http.put('http://192.168.0.5:8800/api').then(function(response){
		 });

}
	     $scope.subtractfunc=function(){
		 count=update($scope.count,-1);
		 $scope.count=count;
	     }
	 }],
	 template:`<div>counter {{count}}
	     <button  class=\"btn btn-success glyphicon glyphicon-plus\" ng-click=\"addfunc()\"></button>
	     <button  class=\"btn btn-warning glyphicon glyphicon-minus\" ng-click=\"subtractfunc()\"></button>
	     </div>`
    }
})
    .directive("popupBtn",function() {
     return {
	 restrict:"EA",
	 replace:true,
	 transclude:true,
	 scope: {},
	 controller: function($uibModal,$scope){
	     $scope.popupModal=function(){
		 $uibModal.open({
		     templateUrl:'comments/modal.tpl.html',
		     scope:$scope,
		 })
	     }
	     return;
	 },
	 template:`<div>
	     <button class=\"btn btn-success\" ng-click=\"popupModal()\" ng-transclude>
	     </button>
	     </div>`,
    }
})
    .run(function($rootScope){
    console.log("hello world");
});

angular.bootstrap(document,['myApp']);

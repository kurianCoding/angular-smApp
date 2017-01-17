angular.module('myApp',[]).directive('myCounter',function(){
    return{
	restrict:"EA",
	replace:true,
	scope:{},
	require:'?ngModel',
	controller:function($scope){
	    $scope.count= 0;
	    var update= function (count,increment){
		return count+increment;
	    }
	    $scope.AddFunc=function(){
		count=update($scope.count,1);
	    $scope.count=count;
	    }
	    $scope.SubtractFunc=function(){
		count=update($scope.count,-1);
	    $scope.count=count;
	    }
	},
	link: function(scope,elements,attrs,ngModel){
	    if(!ngModel){
		return;
	    }
	    ngModel.$render=function(){
		return elements.html('<div>hello world</div>');
	    }
	   },
	template:`<div>Counter {{count}}
	    <button  class=\"btn btn-success glyphicon glyphicon-plus\" ng-click=\"AddFunc()\"></button>
	    <button  class=\"btn btn-warning glyphicon glyphicon-minus\" ng-click=\"SubtractFunc()\"></button>
</div>`
    }
}).run(function($rootScope){
    console.log("hello world");
});
angular.bootstrap(document,['myApp']);

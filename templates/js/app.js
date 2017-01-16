angular.module('myApp',[]).controller('MyController',function ($scope,$parse){
    $scope.count=0;
    $scope.AddFunc=function(){
	$scope.count=	$scope.count+1;
    }
    $scope.SubtractFunc=function(){
	$scope.count=$scope.count-1;
    }
    $scope.$watch('expr',function(newVal,oldVal,$scope){
	if(newVal!==oldVal){
	    var parseFun=$parse(newVal);
	    $scope.parsedValue = parseFun(newVal);
	}
    });
}).directive('myCounter',function(){
    return{
	restrict:"E",
	replace:true,
	scope:{},
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
	template:`<div>Counter {{count}}
	    <button  class=\"btn btn-success glyphicon glyphicon-plus\" ng-click=\"AddFunc()\"></button>
	    <button  class=\"btn btn-warning glyphicon glyphicon-minus\" ng-click=\"SubtractFunc()\"></button>
</div>`
    }
});
angular.bootstrap(document,['myApp']);

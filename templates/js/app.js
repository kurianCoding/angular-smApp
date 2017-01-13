angular.module('myApp',[]).controller('MyController',function ($scope){
    $scope.count=0;
    $scope.AddFunc=function(){
	$scope.count++;
    }
    $scope.SubtractFunc=function(){
	$scope.count--;
    }
    $scope.$watch('expr',function(newVal,oldVal,$scope){
	if(newVal!==oldVal){
	    $scope.comment=newVal;
	}
    });
});
angular.bootstrap(document,['myApp']);

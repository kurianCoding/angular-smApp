angular.module('myApp',[])
    .directive("myCounter",function(){
     return{
	 restrict:"EA",
	 replace:true,
	 scope: {},
	 controller:function($scope){
	     $scope.count= 0;
	     var update= function (count,increment){
		 return count+increment;
	     }
	     $scope.addfunc=function(){
		 count=update($scope.count,1);
		 $scope.count=count;
	     }
	     $scope.subtractfunc=function(){
		 count=update($scope.count,-1);
		 $scope.count=count;
	     }
	 },
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
	 controller: function($scope){
	     return;
	 },
	 template:`<div>
	     <button class=\"btn btn-success\" onClick=\"popupModal()\" ng-transclude>
	     </button>
	     </div>`,
    }
})
    .run(function($rootScope){
    console.log("hello world");
});

angular.bootstrap(document,['myApp']);

function popupModal(){
$('.modal').modal('show');
}

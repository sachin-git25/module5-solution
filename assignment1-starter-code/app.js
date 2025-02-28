(function() {

angular.module('LunchCheck',[])
.controller('LunchCheckController', function($scope) {

$scope.foodlist= "list comma separated dishes you usually have for lunch";

$scope.clickTooMuch= function(){

console.log("I am here");
var listofitems=$scope.foodlist.split(",");


console.log(listofitems);

var filterList = listofitems.filter(item=>item.trim()!=='')

console.log(filterList.length);

if(filterList){

        if (filterList[0]===''){
            $scope.textmessage="You have an empty list - please fix";
        }

   else if(filterList.length>=1 && filterList.length<4){
       $scope.textmessage="Enjoy!!";
     }
     else if (filterList.length>=4){
    $scope.textmessage="To Much!!"
}

}

};



});

})();
(function() {

angular.module('LunchCheck',[])
.controller('LunchCheckController', function($scope) {

$scope.foodlist= "list comma separated dishes you usually have for lunch";

$scope.clickTooMuch= function(){

console.log("I am here");
var listofitems=$scope.foodlist.split(",");


console.log(listofitems);



if(listofitems){

        if (listofitems[0]===''){
            $scope.textmessage="You have an empty list - please fix";
        }

   else if(listofitems.length>=1 && listofitems.length<4){
       $scope.textmessage="Enjoy!!";
     }
     else if (listofitems.length>=4){
    $scope.textmessage="To Much!!"
}

}

};



});

})();
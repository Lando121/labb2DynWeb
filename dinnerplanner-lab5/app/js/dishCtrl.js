// Dinner controller that we use whenever we want to display detailed
// information for one dish
dinnerPlannerApp.controller('DishCtrl', function ($scope,$routeParams,Dinner) {

	$scope.dish = Dinner.getSpecificDish();

	$scope.search = function(query) {
   		$scope.status = "Searching...";
   		Dinner.DishSearch.get({title_kw:query},function(data){
	    $scope.dishes=data.Results;
     	$scope.status = "Showing " + data.Results.length + " results";
   },
	function(data){
     $scope.status = "There was an error";
   });
 }

	$scope.getNumberOfGuests = function() {
    return Dinner.getNumberOfGuests();
  }
  
  	$scope.getDishPrice = function() {
  		var obj = Dinner.getDish($routingParams.dishId);
  		return Dinner.getDishPrice(obj);
  	}


  // TODO in Lab 5: you need to get the dish according to the routing parameter
  // $routingParams.paramName
  // Check the app.js to figure out what is the paramName in this case
  
});
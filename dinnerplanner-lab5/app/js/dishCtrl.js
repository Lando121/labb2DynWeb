// Dinner controller that we use whenever we want to display detailed
// information for one dish
dinnerPlannerApp.controller('DishCtrl', function ($scope,$routeParams,Dinner) {


	$scope.dish = Dinner.Dish.get({id:$routeParams.dishId});


	Dinner.setSpecificDish($scope.dish);

	$scope.getNumberOfGuests = function() {
    return Dinner.getNumberOfGuests();
  }
  
  	$scope.getSpecificPrice = function() {
 
  		return Dinner.getDishPrice($scope.dish);
  	}


  	$scope.getTotalPrice =function (){
  		if($scope.dish != null){
  			return $scope.getNumberOfGuests() * $scope.getSpecificPrice(); 
  		}
  		return 0;
  	}

  	$scope.addDishToMenu = function(){
  		Dinner.addDishToMenu($scope.dish);
  	}


  // TODO in Lab 5: you need to get the dish according to the routing parameter
  // $routingParams.paramName
  // Check the app.js to figure out what is the paramName in this case
  
});
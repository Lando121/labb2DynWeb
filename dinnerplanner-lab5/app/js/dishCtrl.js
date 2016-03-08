// Dinner controller that we use whenever we want to display detailed
// information for one dish
dinnerPlannerApp.controller('DishCtrl', function ($scope,$routeParams,Dinner) {


	$scope.dish = Dinner.Dish.get({id:$routeParams.dishId});
	console.log($scope.dish);


	Dinner.setSpecificDish($scope.dish);

	$scope.getNumberOfGuests = function() {
    return Dinner.getNumberOfGuests();
  }
  
  	$scope.getDishPrice = function() {
  		return Dinner.getDishPrice($scope.dish);
  	}


  	$scope.getTotalPrice =function (){
  		console.log($scope.getNumberOfGuests());
  		console.log($scope.getDishPrice());
  		return $scope.getNumberOfGuests() * $scope.getDishPrice(); 
  	}

  	$scope.addDishToMenu = function(){
  		Dinner.addDishToMenu($scope.dish);
  	}


  // TODO in Lab 5: you need to get the dish according to the routing parameter
  // $routingParams.paramName
  // Check the app.js to figure out what is the paramName in this case
  
});
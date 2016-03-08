// Dinner controller that we use whenever we have view that needs to 
// display or modify the dinner menu
dinnerPlannerApp.controller('DinnerCtrl', function ($scope,Dinner) {

  $scope.numberOfGuests = Dinner.getNumberOfGuests();

  $scope.menu = Dinner.getFullMenu();
  $scope.specificDish = Dinner.getSpecificDish();


  $scope.setNumberOfGuest = function(number){
    Dinner.setNumberOfGuests(number);
  }

  $scope.getNumberOfGuests = function() {
    return Dinner.getNumberOfGuests();
  }

  $scope.getDinnerMenu = function() {
  	return Dinner.getFullMenu();
  }

  $scope.addDishToMenu = function(obj) {
  	Dinner.addDishToMenu(obj);

  }

  $scope.getTotalMenuPrice = function(){
  	return Dinner.getTotalMenuPrice();
  }

  $scope.getSpecificDishPrice = function(){
  	if($scope.specificDish == null) {
  		return 0;
  	}
  	return Dinner.getDishPrice($scope.specificDish);
  }

  // TODO in Lab 5: Implement the methods to get the dinner menu
  // add dish to menu and get total menu price

});
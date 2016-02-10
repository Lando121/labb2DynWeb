$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#exampleView"));
	exampleView.numberOfGuests.html(model.getNumberOfGuests());
	exampleView.totalCost.html(model.getTotalMenuPrice());

});
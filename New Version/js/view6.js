//$.getScript("js/view3.js");
var view3Func = function (container, model){
	//toast
	this.View6 = container.find("#view6_toast");
	this.View6.html(model.getDishById(1).name);
	this.View6 = container.find("#toast_description");
	this.View6.html(model.getDishById(1).description);
	

	//sugardough
	this.View6 = container.find("#view6_sour");
	this.View6.html(model.getDishById(2).name);
	this.View6 = container.find("#sour_description");
	this.View6.html(model.getDishById(2).description);

}
$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	var viewCache;

	
	

	//And create the needed controllers and views
	//var exampleView = new ExampleView($("#exampleView"));
	//exampleView.numberOfGuests.html(model.getNumberOfGuests());
	//exampleView.totalCost.html(model.getTotalMenuPrice());

	var view3 = new view3Func($("#View6"), model);
});

//$.getScript("js/view3.js");
var view3Func = function (container,model){

	this.View3 = container.find("#view3_toast_img");
	var text = model.getDishById(1).image;
	this.View3.src = text;

	
}
$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	var viewCache;

	
	

	//And create the needed controllers and views
	//var exampleView = new ExampleView($("#exampleView"));
	//exampleView.numberOfGuests.html(model.getNumberOfGuests());
	//exampleView.totalCost.html(model.getTotalMenuPrice());

	var view3 = new view3Func($("#View3"),model);
});

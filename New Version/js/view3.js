//$.getScript("js/view3.js");
var view3Func = function (container,model){

	this.View3 = container.find("#view3_dish1_name");
	this.View3.html(model.getDishById(1).name);
	this.View3 = container.find("#view3_dish1_desc");
	this.View3.html(model.getDishById(1).description);

	this.View3 = container.find("#view3_dish2_name");
	this.View3.html(model.getDishById(3).name);
	this.View3 = container.find("#view3_dish2_desc");
	this.View3.html("<p>" + model.getDishById(3).description + "</p>");
		

	this.View3 = container.find("#view3_dish3_name");
	this.View3.html(model.getDishById(2).name);
	this.View3 = container.find("#view3_dish3_desc");
	this.View3.html(model.getDishById(2).description);

	this.View3 = container.find("#view3_dish4_name");
	this.View3.html(model.getDishById(100).name);
	this.View3 = container.find("#view3_dish4_desc");
	this.View3.html(model.getDishById(100).description);

	this.View3 = container.find("#view3_dish5_name");
	this.View3.html(model.getDishById(200).name);
	this.View3 = container.find("#view3_dish5_desc");
	this.View3.html(model.getDishById(200).description);

	
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

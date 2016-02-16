//$.getScript("js/view3.js");
var view3Func = function (container, model){

	$("#view6_amount_people").html(model.getNumberOfGuests());
	
	//toast
	$("#view6_dish1_img").attr("src", "images/" + model.getDishById(1).image);
	$("#view6_toast").html(model.getDishById(1).name);
	$("#toast_description").html(model.getDishById(1).description);


	//sugardough
	$("#view6_dish2_img").attr("src", "images/" + model.getDishById(2).image);
	$("#view6_sour").html(model.getDishById(2).name);
	$("#sour_description").html(model.getDishById(3).description);
	

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

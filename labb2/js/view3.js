//$.getScript("js/view3.js");
var view3Func = function (container,model){

	$("#view3_dish1_img").attr("src", "images/" + model.getDishById(1).image);
	$("#view3_dish1_name").html(model.getDishById(1).name);
	$("#view3_dish1_desc").html(model.getDishById(1).description);
	

	$("#view3_dish2_img").attr("src", "images/" + model.getDishById(3).image);
	$("#view3_dish2_name").html(model.getDishById(3).name);
	$("#view3_dish2_desc").html(model.getDishById(3).description);

	$("#view3_dish3_img").attr("src", "images/" + model.getDishById(2).image);
	$("#view3_dish3_name").html(model.getDishById(2).name);
	$("#view3_dish3_desc").html(model.getDishById(2).description);

	$("#view3_dish4_img").attr("src", "images/" +  model.getDishById(100).image);
	$("#view3_dish4_name").html(model.getDishById(100).name);
	$("#view3_dish4_desc").html(model.getDishById(100).description);

	$("#view3_dish5_img").attr("src", "images/" + model.getDishById(200).image);
	$("#view3_dish5_name").html(model.getDishById(200).name);
	$("#view3_dish5_desc").html(model.getDishById(200).description);
	

	
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

//$.getScript("js/view3.js");
var view4Func = function (container, model){

	$("#view4_dish_img").attr("src", "images/" +  model.getDishById(1).image);
	$("#view4_dish_name").html(model.getDishById(1).name);
	$("#view4_description_paragraph").html(model.getDishById(1).description);
	$("#view4_amount_of_people").html(model.getNumberOfGuests());
	
	var middleBox = container.find("#view4_recipe_middle_box");
	var dish = model.getDishById(1).ingredients; 
	var totalPrice = 0;
	var numGuest = model.getNumberOfGuests();
	for(i = 0; i < dish.length; i++){
		totalPrice = totalPrice + dish[i].price;
		middleBox.append('<div class="row view4_ingredient_row">');
		middleBox.append('<div class="col-xs-2">' + dish[i].quantity*numGuest + " " + dish[i].unit + "</div>");
		middleBox.append('<div class="col-xs-6">' + dish[i].name + "</div>");
		middleBox.append('<div class="col-xs-2 right_align_par">' + "SEK" + "</div>");
		middleBox.append('<div class="col-xs-2 right_align_par">' + dish[i].price*numGuest + "</div>");
		middleBox.append("</div>");
	
	}
	
	$("#view4_total_cost").html(totalPrice*numGuest);
	

}
var update = function(obj){


}

$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	var viewCache;

	
	model.addObserver(this);

	//And create the needed controllers and views
	//var exampleView = new ExampleView($("#exampleView"));
	//exampleView.numberOfGuests.html(model.getNumberOfGuests());
	//exampleView.totalCost.html(model.getTotalMenuPrice());

	var view4 = new view4Func($("#View4"), model);
});

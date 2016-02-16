//$.getScript("js/view3.js");
var view4Func = function (container, model){
	this.View4 = container.find("#view4_dish_name");
	this.View4.html(model.getDishById(100).name);

	this.View4 = container.find("#view4_description_paragraph");
	this.View4.html(model.getDishById(100).description);

	this.View4 = container.find("#view4_amount_of_people");
	this.View4.html(model.getNumberOfGuests());



	this.View4 = container.find("#view4_recipe_middle_box");
	var dish = model.getDishById(100).ingredients; 
	var totalPrice = 0;
	for(i = 0; i < dish.length; i++){
		totalPrice = totalPrice + dish[i].price;
		this.View4.append('<div class="row view4_ingredient_row">');
		this.View4.append('<div class="col-xs-2">' + dish[i].quantity + " " + dish[i].unit + "</div>");
		this.View4.append('<div class="col-xs-6">' + dish[i].name + "</div>");
		this.View4.append('<div class="col-xs-2 right_align_par">' + "SEK" + "</div>");
		this.View4.append('<div class="col-xs-2 right_align_par">' + dish[i].price + "</div>");
		this.View4.append("</div>");
	
	}
	this.View4 = container.find("#view4_total_cost");
	this.View4.html(totalPrice);
}

$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	var viewCache;

	
	

	//And create the needed controllers and views
	//var exampleView = new ExampleView($("#exampleView"));
	//exampleView.numberOfGuests.html(model.getNumberOfGuests());
	//exampleView.totalCost.html(model.getTotalMenuPrice());

	var view3 = new view4Func($("#View4"), model);
});

//$.getScript("js/view3.js");
var view3Func = function (container, model){
	/*Toast*/
	this.View5 = container.find("#view5_toast_name");
	this.View5.html(model.getDishById(1).name);
	//price
	this.View5 = container.find("#view5_price_toast")
	var totalPrice1 = 0;
	for(j=0; j < model.getDishById(1).ingredients.length; j++){
		//console.log(j + " " + model.getDishById(1).ingredients[j]);
		totalPrice1 = totalPrice1 + model.getDishById(1).ingredients[j].price;
	}
	this.View5.html(totalPrice1 + "kr");



	/*Baked Brie*/
	this.View5 = container.find("#view5_brie_name");
	this.View5.html(model.getDishById(3).name);
	//price
	this.View5 = container.find("#view5_price_brie");
	var totalPrice2 = 0;
	for(j=0; j < model.getDishById(3).ingredients.length; j++){
		//console.log(j + " " + model.getDishById(3).ingredients[j]);
		totalPrice2 = totalPrice2 + model.getDishById(3).ingredients[j].price;
	}
	this.View5.html(totalPrice2 + "kr");


	/* SourDough*/
	this.View5 = container.find("#view5_sour_name");
	this.View5.html(model.getDishById(2).name);
	//price
	this.View5 = container.find("#view5_price_sour");
	var totalPrice3 = 0;
	for(j=0; j < model.getDishById(2).ingredients.length; j++){
		console.log(j + " " + model.getDishById(2).ingredients[j]);
		totalPrice3 = totalPrice3 + model.getDishById(2).ingredients[j].price;
	}
	this.View5.html(totalPrice3 + "kr");

	/* Total cost*/
	this.View5 = container.find("#total_price");
	this.View5.html(totalPrice1 + totalPrice2 + totalPrice3 + "kr");


	

}
$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	var viewCache;

	
	

	//And create the needed controllers and views
	//var exampleView = new ExampleView($("#exampleView"));
	//exampleView.numberOfGuests.html(model.getNumberOfGuests());
	//exampleView.totalCost.html(model.getTotalMenuPrice());

	var view3 = new view3Func($("#View5"),model);
});

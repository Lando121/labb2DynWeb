//$.getScript("js/view3.js");
var view3Func = function (container, model){

	var numGuest = model.getNumberOfGuests();
	
/*	$("#view5_amount_people").html(model.getNumberOfGuests());
	//Toast
	$("#view5_dish1_img").attr("src", "images/" + model.getDishById(1).image);
	$("#view5_dish1_name").html(model.getDishById(1).name);
	//price
	var totalPrice1 = 0;
	for(j=0; j < model.getDishById(1).ingredients.length; j++){
		//console.log(j + " " + model.getDishById(1).ingredients[j]);
		totalPrice1 = totalPrice1 + model.getDishById(1).ingredients[j].price;
	}
	$("#view5_price_dish1").html(totalPrice1*numGuest + "kr");

	$("#view5_dish2_img").attr("src", "images/" + model.getDishById(3).image);
	$("#view5_dish2_name").html(model.getDishById(3).name);
	//price
	var totalPrice2 = 0;
	for(j=0; j < model.getDishById(3).ingredients.length; j++){
		//console.log(j + " " + model.getDishById(1).ingredients[j]);
		totalPrice2 = totalPrice2 + model.getDishById(3).ingredients[j].price;
	}
	$("#view5_price_dish2").html(totalPrice2*numGuest + "kr");

	$("#view5_dish3_img").attr("src", "images/" + model.getDishById(2).image);
	$("#view5_dish3_name").html(model.getDishById(2).name);
	//price
	var totalPrice3 = 0;
	for(j=0; j < model.getDishById(2).ingredients.length; j++){
		//console.log(j + " " + model.getDishById(1).ingredients[j]);
		totalPrice3 = totalPrice3 + model.getDishById(2).ingredients[j].price;
	}
	$("#view5_price_dish3").html(totalPrice3*numGuest + "kr");



	$("#total_price").html((totalPrice1 + totalPrice2 + totalPrice3)*numGuest + "kr");
*/
	$("#view5_amount_people").html(model.getNumberOfGuests());
	var totalPrice = 0;
	var menu = model.getFullMenu();
	for(k=1; k<menu.length+1; k++){
	
		$("#view5_dish" + k + "_img").attr("src", "images/" + menu[k-1].image); 
		$("#view5_dish" + k + "_name").html(menu[k-1].name);

		var price = 0;
		for(j=0; j < menu[k-1].ingredients.length; j++){
			//console.log(j + " " + model.getDishById(1).ingredients[j]);
			price = price + menu[k-1].ingredients[j].price;
		}

		$("#view5_price_dish" + k).html(price*numGuest + "kr");

		totalPrice = totalPrice + price;
	}

	$("#total_price").html(totalPrice*numGuest + "kr");


	

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

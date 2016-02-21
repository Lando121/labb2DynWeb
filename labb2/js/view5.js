//$.getScript("js/view3.js");
var view3Func = function (container, model){

	var numGuest = model.getNumberOfGuests();
	var menu = model.getFullMenu();
	var totalCost = 0;
	for(k = 0; k<menu.length; k++){
		console.log(menu[k].id);
		console.log(model.getDishPrice(menu[k].id));
		totalCost = totalCost + model.getDishPrice(menu[k].id)*numGuest;
		$("#view5_centerPics").append("<div class='col-xs-12 col-sm-4 _dish_col'><div class='row view3_dish_obj'><img src='images/" + menu[k].image + "' class='view3_dish_img'></div>" + "<div class='row view3_dish_obj view3_dish_name' id='view5_dish'" + k +"_name'>"+ menu[k].name + "</div>" +"<div class='row view3_dish_info'><p class='view5_price' id='view5_price_dish"+ k + "'>" + model.getDishPrice(menu[k].id)*numGuest +" kr</p></div></div>");
		
	}

	$("#total_price").html(totalCost + " kr");
	
	
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

//$.getScript("js/view3.js");
var view5Func = function (container, model){

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
	$("#view5_amount_people").html(model.getNumberOfGuests());
	
	


	

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

	var view5 = new view5Func($("#View5"),model);
});

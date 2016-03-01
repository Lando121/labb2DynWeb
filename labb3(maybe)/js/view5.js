var view5Func = function (container, model){
	container.hide();


	this.load = function(){
		
		var numGuest = model.getNumberOfGuests();
		var menu = model.getFullMenu();
		var totalCost = 0;
		
		$("#view5_centerPics").html("");
		for(k = 0; k<menu.length; k++){
			totalCost = totalCost + model.getDishPrice(menu[k])*numGuest;
			$("#view5_centerPics").append("<div class='col-xs-12 col-sm-4 _dish_col'><div class='row view3_dish_obj'><img src='" + menu[k].ImageURL  + "' class='view3_dish_img'></div>" + "<div class='row view3_dish_obj view3_dish_name' id='view5_dish'" + k +"_name'>"+ menu[k].Title + "</div>" +"<div class='row view3_dish_info'><p class='view5_price' id='view5_price_dish"+ k + "'>" + model.getDishPrice(menu[k])*numGuest +" kr</p></div></div>");
			
		}

		$("#total_price").html(totalCost + " kr");
		$("#view5_amount_people").html(model.getNumberOfGuests());
		
	}
	
	this.update = function(obj){
		this.load();

	}
}
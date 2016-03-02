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
	
		this.errorMess = function(obj, view, exception){
		if(view == "view5"){
			if (obj === 0) {
                alert('Could not connect.\n Verify Network.');
            } else if (obj == 404) {
                alert('Requested page not found. [404]');
            } else if (obj == 500) {
                alert('Internal Server Error [500].');
            } else if (exception === 'parsererror') {
                alert('Requested JSON parse failed.');
            } else if (exception === 'timeout') {
                alert('Time out error.');
            } else if (exception === 'abort') {
                alert('Ajax request aborted.');
            } else {
                alert('Uncaught Error.\n' + jqXHR.responseText);
            }
		}
	}
	
	this.update = function(obj, exception){
		if(exception){
			this.errorMess(obj.status, exception);
			return;
		}
		this.load(obj);
	}
}
var view2afterFunc = function (container,model){

	container.hide();
//view2 screen after pending update
	this.load = function(obj){
	
			var numGuest = model.getNumberOfGuests();
			if(model.getSpecificDish() == null){

			$("#view2_specific_dish").html("0,00");
		} else {
			
			$("#view2_specific_dish").html(model.getDishPrice(model.getSpecificDish()) * numGuest);
		}
		
		

		$("#peopleInput").val(numGuest);	
		var menu = model.getFullMenu();
		var totalCost = 0;
		
		$("#view2after").html("");
		for(m = 0; m<menu.length; m++){

			$("#view2after").html("");
			
		
			for(m = 0; m<menu.length; m++){
				
				totalPrice = model.getDishPrice(menu[m])*numGuest;
				totalCost = totalCost + totalPrice;
				$("#view2after").append("<div dishID='" + menu[m].RecipeID + "' class='col-xs-6 left_align_par orange_paragraph_view2 view2_menuItem' id='view2after_name'" +"'>"+ menu[m].Title + "</div>" 
					+ "<div class='col-xs-6 right_align_par orange_paragraph_view2' id='view2after_pending_cost'"+ "'>" + totalPrice + "</div><div class='clearfix'></div>");
				//$("#view2after_pending_cost").html(totalPrice);
				//$("#view2after_name").html(menu[m].name);
			}
			$("#view2after_sek_paragraph").html("SEK " + totalCost);

		}
	


			this.errorMess = function(obj, view, exception){
		if(view == "view2after"){
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

}
var view2afterFunc = function (container,model){


//view2 screen after pending update
	this.load = function(){
		
		var numGuest = model.getNumberOfGuests();
		$("#peopleInput").val(numGuest);	
		var menu = model.getFullMenu();
		var totalCost = 0;
		
		$("#view2after").html("");
		for(m = 0; m<menu.length; m++){
			
			
			totalPrice = model.getDishPrice(menu[m].id)*numGuest;
			totalCost = totalCost + totalPrice;
			$("#view2after").append("<div dishID='" + menu[m].id + "' class='col-xs-6 left_align_par orange_paragraph_view2 view2_menuItem' id='view2after_name'" +"'>"+ menu[m].name + "</div>" 
				+ "<div class='col-xs-6 right_align_par orange_paragraph_view2' id='view2after_pending_cost'"+ "'>" + totalPrice + "</div><div class='clearfix'></div>");
			//$("#view2after_pending_cost").html(totalPrice);
			//$("#view2after_name").html(menu[m].name);
		}
		$("#view2after_sek_paragraph").html("SEK " + totalCost);

	}


	this.update = function(obj){
		
		this.load();
	}
	
		

}
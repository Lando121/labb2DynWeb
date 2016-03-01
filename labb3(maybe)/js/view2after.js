var view2afterFunc = function (container,model){

	container.hide();
//view2 screen after pending update
	this.load = function(obj){
	
			console.log(model.getFullMenu().length);
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
				console.log(menu);
				
				totalPrice = model.getDishPrice(menu[m])*numGuest;
				totalCost = totalCost + totalPrice;
				$("#view2after").append("<div dishID='" + menu[m].RecipeID + "' class='col-xs-6 left_align_par orange_paragraph_view2 view2_menuItem' id='view2after_name'" +"'>"+ menu[m].Title + "</div>" 
					+ "<div class='col-xs-6 right_align_par orange_paragraph_view2' id='view2after_pending_cost'"+ "'>" + totalPrice + "</div><div class='clearfix'></div>");
				//$("#view2after_pending_cost").html(totalPrice);
				//$("#view2after_name").html(menu[m].name);
			}
			$("#view2after_sek_paragraph").html("SEK " + totalCost);

		}
	


		this.update = function(obj){
			
			this.load(obj);
		}
	
		

}
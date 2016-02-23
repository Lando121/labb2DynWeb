var view4Func = function (container, model){
	

	container.hide();


	this.load = function(){
		var selDish = model.getSpecificDish();
		if(selDish == null){
			return;
		}
		$("#view4_dish_img").attr("src", "images/" +  selDish.image);
		$("#view4_dish_name").html(selDish.name);
		$("#view4_description_paragraph").html(selDish.description);
		$("#view4_amount_of_people").html(model.getNumberOfGuests());
		var middleBox = container.find("#view4_recipe_middle_box");
		middleBox.html("");
		var dish = selDish.ingredients; 
		var totalPrice = 0;
		var numGuest = model.getNumberOfGuests();
		for(i = 0; i < dish.length; i++){
			totalPrice = totalPrice + dish[i].price;
			middleBox.append('<div class="row view4_ingredient_row"><div class="col-xs-2">' + dish[i].quantity*numGuest + " " + dish[i].unit + "</div><div class='col-xs-6'>" + dish[i].name + "</div><div class='col-xs-2 right_align_par'>" + "SEK" + "</div><div class='col-xs-2 right_align_par'>" + dish[i].price*numGuest + "</div></div>");
		
		}
		$("#view4_total_cost").html(totalPrice*numGuest);

	}
	
	this.update = function(obj){

	  	this.load();
	}	

}
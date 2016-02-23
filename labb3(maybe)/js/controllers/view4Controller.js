
var view4Controller = function(view, model){


	$("#back_to_select_dish_button").on("click", function(){
		model.setSpecificDish(null);
		$("#View4").hide();
		$("#View3").show();

		

	});

	$("#View4").delegate("#view4_confirm_dish_button","click", function(){
		model.addDishToMenu(model.getSpecificDish().id);	

	});
	


}

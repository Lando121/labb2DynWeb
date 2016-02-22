
var view3Controller = function(view, model){


	$("#view3_dropdown_items").on("change", function(){

		view.load();
	});


	$("#view3_search_button").on("click", function(){
		view.load();	
	});

<<<<<<< Updated upstream
	$(".view3_dish_col").on("click", function(){
			model.setSpecificDish(this.getAttribute("dishID"));
=======

	$("body").delegate(".view3_dish_col","click", function(){

			model.setSpecificDish(this.getAttribute("data-internalid"));
>>>>>>> Stashed changes
			$("#View3").hide();
			$("#View4").show();


	});
	$("#back_to_select_dish_button").on("click", function(){
		$("#View4").hide();	
		$("#View3").show();
	});
	

	


}


var view3Controller = function(view, model){


	$("#view3_dropdown_items").on("change", function(){

		view.load();
	});


	$("#view3_search_button").on("click", function(){
		view.load();	
	});

	$(".view3_dish_col").on("click", function(){
			model.setSpecificDish(this.getAttribute("dishID"));
			$("#View3").hide();
			$("#View4").show();


	});
	

	


}

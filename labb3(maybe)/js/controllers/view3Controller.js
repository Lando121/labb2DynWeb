
var view3Controller = function(view, model){


	$("#view3_dropdown_items").on("change", function(){
		//model.getAllDishes($("#view3_search_text_field").val().toLowerCase().trim(),$("#view3_dropdown_items option:selected").text());
	});


	$("#view3_search_button").on("click", function(){
		model.getAllDishes($("#view3_search_text_field").val().toLowerCase().trim(),$("#view3_dropdown_items option:selected").text());	
	});



	$("body").delegate(".view3_dish_col","click", function(){

			model.setSpecificDish(this.getAttribute("dishID"));
			$("#View3").hide();
			$("#View4").show();


	});

	

	


}

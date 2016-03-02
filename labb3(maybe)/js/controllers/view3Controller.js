
var view3Controller = function(view, model){


	$("#view3_dropdown_items").on("change", function(){
		//model.getAllDishes($("#view3_search_text_field").val().toLowerCase().trim(),$("#view3_dropdown_items option:selected").text());
	});


	$("#view3_search_button").on("click", function(){
		$("#view3_dish_row").hide();

		model.getAllDishes(function(data){
			model.notifyObservers(data), $("#view3_dish_row").show();
		},$("#view3_search_text_field").val().toLowerCase().trim(),$("#view3_dropdown_items option:selected").text(), "view3");	
	});



	$("body").delegate(".view3_dish_col","click", function(){

			model.getDish(function(data){ 
				model.setSpecificDish(data); model.notifyObservers(data); $("#View3").hide();$("#View4").show();
		}
				,this.getAttribute("dishID"), "view3");
			


	});

	

	


}

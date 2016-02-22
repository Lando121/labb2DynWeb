
var view3Controller = function(view, model){


	$("#view3_dropdown_items").on("change", function(){

		view.load();
	});


	$("#view3_search_button").on("click", function(){
		view.load();	
	});


}

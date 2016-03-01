var view3Func = function (container,model){


	container.hide();
		

	this.load = function(obj){
		console.log("load view3");
		console.log(obj);
	
		var showing = model.getAllDishes($("#view3_search_text_field").val().toLowerCase().trim(),$("#view3_dropdown_items option:selected").text());
		console.log(showing);
		/**$("#view3_dish_row").html("");
	
		for(i = 0; i<showing.length; i++){
			
				$("#view3_dish_row").append("<div dishID='" + showing[i].id + "' class='col-sm-12 col-sm-2 view3_dish_col'><div class='row view3_dish_obj'><img src='images/" + showing[i].image +  "' class='view3_dish_img'></div>" + "<div class='row view3_dish_obj view3_dish_name'>" + showing[i].name + "</div>"+"<div class='row view3_dish_info'>" + showing[i].description + "</div> </div>");	
			
			
		}	
		**/

	}
	
	this.update = function(obj){
		this.load(obj);
	}
	
}
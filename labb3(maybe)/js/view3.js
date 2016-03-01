var view3Func = function (container,model){


	container.hide();
		

	this.load = function(obj){
		if(obj != null){

			if(obj.Results != null){
				
				$("#view3_dish_row").html("");
		
				for(i = 0; i<obj.Results.length; i++){
					$("#view3_dish_row").append("<div dishID='" + obj.Results[i].RecipeID + "' class='col-xs-12 col-sm-4 view3_dish_col'><div class='row view3_dish_obj'><img src='" + obj.Results[i].ImageURL +  "' class='view3_dish_img'></div>" + "<div class='row view3_dish_obj view3_dish_name'>" + obj.Results[i].Title + "</div></div>");	
					if(i % 3== 2){
						$("#view3_dish_row").append("<div class='row'>");
					}
				}

			}
		
		
		

		}
	}
	
	this.update = function(obj){
		this.load(obj);
	}
	
}
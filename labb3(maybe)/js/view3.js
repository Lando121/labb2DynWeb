var view3Func = function (container,model){


	container.hide();
		

	this.load = function(obj){
		if(obj != null){
			console.log("load view3");
			console.log(obj.Results);
	
		
			$("#view3_dish_row").html("");
	
		for(i = 1; i<=obj.Results.length; i++){
			

				$("#view3_dish_row").append("<div dishID='" + obj.Results[i-1].RecipeID + "' class='col-xs-12 col-sm-4 view3_dish_col'><div class='row view3_dish_obj'><img src='" + obj.Results[i-1].ImageURL +  "' class='view3_dish_img'></div>" + "<div class='row view3_dish_obj view3_dish_name'>" + obj.Results[i-1].Title + "</div>"+"<div class='row view3_dish_info'>" + model.getDish(function(data){console.log(data.Description);return data.Description},obj.Results[i-1].RecipeID) + "</div> </div>");	
				if(i % 3== 0){
					$("#view3_dish_row").append("<div class='row'>");
				}
			
		}	
		}
		
		

	}
	
	this.update = function(obj){
		this.load(obj);
	}
	
}
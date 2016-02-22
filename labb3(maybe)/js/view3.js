var view3Func = function (container,model){

	var showing = model.getTypeDish("main dish");

	

	this.load = function(){
		
		$("#view3_dish_row").html("");
		for(i = 0; i<showing.length; i++){
			$("#view3_dish_row").append("<div class='col-sm-12 col-sm-2 view3_dish_col'><div class='row view3_dish_obj'><img src='images/" + showing[i].image +  "' class='view3_dish_img'></div>" + "<div class='row view3_dish_obj view3_dish_name'>" + showing[i].name + "</div>"+"<div class='row view3_dish_info'>" + showing[i].description + "</div> </div>");
			
		}	

	}
	
	this.update = function(obj){
		this.load();
	}
	
}
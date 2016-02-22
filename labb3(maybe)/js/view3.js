var view3Func = function (container,model){

	

	var showing;	

	this.load = function(){
		showing = model.getTypeDish($("#view3_dropdown_items option:selected").text());
		console.log($("#view3_dropdown_items option:selected").text());
		$("#view3_dish_row").html("");
		for(i = 0; i<showing.length; i++){
			$("#view3_dish_row").append("<div class='col-sm-12 col-sm-2 view3_dish_col'><div class='row view3_dish_obj'><img src='images/" + showing[i].image +  "' class='view3_dish_img'></div>" + "<div class='row view3_dish_obj view3_dish_name'>" + showing[i].name + "</div>"+"<div class='row view3_dish_info'>" + showing[i].description + "</div> </div>");
			
		}	

	}
	
	this.update = function(obj){
		this.load();
	}
	
}
var view3Func = function (container,model){

	

		

	this.load = function(){
		var showing = model.getTypeDish($("#view3_dropdown_items option:selected").text());
		var text = $("#view3_search_text_field").val().toLowerCase().trim();
		$("#view3_dish_row").html("");
		if(text != ""){
			for(k = 0; k < showing.length; k++){

				var bool = false;
				var curWords = showing[k].name.split(" ");
				for(p = 0; p < curWords.length; p++){
					if(text == curWords[p].toLowerCase()){
						bool = true;
					}
				}
				if(!bool){
					showing.splice(k, 1);
					k--;
				}

			}
		} 
		for(i = 0; i<showing.length; i++){
			
				$("#view3_dish_row").append("<div class='col-sm-12 col-sm-2 view3_dish_col'><div class='row view3_dish_obj'><img src='images/" + showing[i].image +  "' class='view3_dish_img'></div>" + "<div class='row view3_dish_obj view3_dish_name'>" + showing[i].name + "</div>"+"<div class='row view3_dish_info'>" + showing[i].description + "</div> </div>");	
			
			
		}	

	}
	
	this.update = function(obj){
		this.load();
	}
	
}
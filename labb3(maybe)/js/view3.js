var view3Func = function (container,model){


	container.hide();
		

	this.load = function(obj){
		if(obj != null){

			if(obj.Results != null){

				$("#view3_dish_row").html("");
		
				for(i = 0; i<obj.Results.length; i++){
					$("#view3_dish_row").append("<div dishID='" + obj.Results[i].RecipeID + "' class='col-xs-12 col-sm-3 view3_dish_col'><div class='row view3_dish_obj'><img src='" + obj.Results[i].ImageURL +  "' class='view3_dish_img'></div>" + "<div class='row view3_dish_obj view3_dish_name'>" + obj.Results[i].Title + "</div></div>");	
					if(i % 4== 3){
						$("#view3_dish_row").append("<div class='row'>");
					}
				}

			}

		
		
		

		}
	}

	this.errorMess = function(obj, view, exception){
		if(view == "view3"){
			if (obj === 0) {
                alert('Could not connect.\n Verify Network.');
            } else if (obj == 404) {
                alert('Requested page not found. [404]');
            } else if (obj == 500) {
                alert('Internal Server Error [500].');
            } else if (exception === 'parsererror') {
                alert('Requested JSON parse failed.');
            } else if (exception === 'timeout') {
                alert('Time out error.');
            } else if (exception === 'abort') {
                alert('Ajax request aborted.');
            } else {
                alert('Uncaught Error.\n' + jqXHR.responseText);
            }
		}
		
	}
	
	this.update = function(obj, view, exception){
		if(exception){
			this.errorMess(obj.status, view, exception);
			return;
		}
		this.load(obj);
	}
	
}
var view6Func = function (container, model){
	container.hide();
	

	this.load = function(){
	
		var menu = model.getFullMenu();
	
		$("#view6_dynamic").html("");
		for(k = 0; k<menu.length; k++){
			console.log(menu[k].Description);
			$("#view6_dynamic").append("<div class='row view6_dishrow'> <div class='col-xs-6 col-sm-2'><img id='view6_dish" + k + "_img' src ='" + menu[k].ImageURL +  "' class='view3_dish_img'></div><div class='col-xs-6 col-sm-4'><h1 class='view6_dishname' id='view6_dish" + k + "'>" + menu[k].Title + "</h1><p id='dish" + k + "_description'>" + menu[k].Description + "</p></div><div class='col-xs-12 col-sm-6'><h1 id='view6_dishpreparation'>Preparation</h1><p>" + menu[k].Instructions+ "</p></div></div>")
		}
		$("#view6_amount_people").html(model.getNumberOfGuests());

	}
		this.errorMess = function(obj, view, exception){
		if(view == "view6"){
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
	
	this.update = function(obj, exception){
		if(exception){
			this.errorMess(obj.status, exception);
			return;
		}
		this.load(obj);
	}
}

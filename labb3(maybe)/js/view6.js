var view6Func = function (container, model){
	container.hide();
	

	this.load = function(){
	
		var menu = model.getFullMenu();
	
		$("#view6_dynamic").html("");
		for(k = 0; k<menu.length; k++){
			$("#view6_dynamic").append("<div class='row view6_dishrow'> <div class='col-xs-6 col-sm-2'><img id='view6_dish" + k + "_img' src ='" + menu[k].ImageURL +  "' class='view3_dish_img'></div><div class='col-xs-6 col-sm-4'><h1 class='view6_dishname' id='view6_dish" + k + "'>" + menu[k].Title + "</h1><p id='dish" + k + "_description'>" + menu[k].Description + "</p></div><div class='col-xs-12 col-sm-6'><h1 id='view6_dishpreparation'>Preparation</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div></div>")
		}
		$("#view6_amount_people").html(model.getNumberOfGuests());

	}
	
	this.update = function(obj){
		this.load();

	}
}

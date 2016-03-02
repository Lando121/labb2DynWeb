var view4Func = function (container, model){
	

	container.hide();


	this.load = function(){
		console.log(model.getSpecificDish());
		var selDish = model.getSpecificDish();
		if(selDish == null){
			return;
		}
		$("#view4_dish_img").attr("src", selDish.ImageURL);
		$("#view4_dish_name").html(selDish.Title);
		$("#view4_description_paragraph").html(selDish.Description);
		$("#view4_preparation_paragraph").html(selDish.Instructions);
		$("#view4_amount_of_people").html(model.getNumberOfGuests());
		var middleBox = container.find("#view4_recipe_middle_box");
		middleBox.html("");
		var dish = selDish.Ingredients; 
		var totalPrice = model.getDishPrice(selDish);
		var numGuest = model.getNumberOfGuests();
		for(i = 0; i < dish.length; i++){
	
			middleBox.append('<div class="row view4_ingredient_row"><div class="col-xs-2">' + dish[i].Quantity*numGuest + " " + dish[i].Unit + "</div><div class='col-xs-6'>" + dish[i].Name + "</div><div class='col-xs-2 right_align_par'>" + "SEK" + "</div><div class='col-xs-2 right_align_par'>" + dish[i].Quantity*numGuest + "</div></div>");
		
		}
		$("#view4_total_cost").html(totalPrice*numGuest);

	}

	this.reset = function(){
		$("#view4_dish_img").attr("src", "");
		$("#view4_dish_name").html("");
		$("#view4_description_paragraph").html("");
		$("#view4_preparation_paragraph").html("");
		$("#view4_amount_of_people").html("");
	}

	this.errorMess = function(obj,view, exception){
		if(view == "view4"){
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
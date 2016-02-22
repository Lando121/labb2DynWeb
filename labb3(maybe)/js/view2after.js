//$.getScript("js/view3.js");
var view2afterFunc = function (container,model){
//view2 screen after pending update
	var numGuest = model.getNumberOfGuests();
	$("#peopleInput").val(numGuest)
;	console.log(model.getNumberOfGuests());
	var menu = model.getFullMenu();
	var totalCost = 0;
	for(m = 0; m<menu.length; m++){
		console.log(menu[m].name);
		console.log(model.getDishPrice(menu[m].id));
		dishPrice = model.getDishPrice(menu[m].id);
		totalPrice = dishPrice*numGuest;
		console.log(totalPrice);
		totalCost = totalCost + dishPrice*numGuest;
		$("#view2after").append("<div class='col-xs-6 left_align_par orange_paragraph_view2' id='view2after_name'" +"'>"+ menu[m].name + "</div>" 
			+ "<div class='col-xs-6 right_align_par orange_paragraph_view2' id='view2after_pending_cost'"+ "'>" + totalPrice + "</div><div class='clearfix'></div>");
		//$("#view2after_pending_cost").html(totalPrice);
		//$("#view2after_name").html(menu[m].name);
	}
	
		$("#view2after_sek_paragraph").html("SEK " + totalCost);

}

var update = function(obj){


}

	
$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	var viewCache;
	model.addObserver(this);

	
	

	//And create the needed controllers and views
	//var exampleView = new ExampleView($("#exampleView"));
	//exampleView.numberOfGuests.html(model.getNumberOfGuests());
	//exampleView.totalCost.html(model.getTotalMenuPrice());

	var view2after = new view2afterFunc($("#View2_after"),model);
});




































//$.getScript("js/view3.js");
var view2Func = function (container,model){
	if(document.getElementById("View4") != null){
		var dish = model.getDishById(1).ingredients;
		var totalPrice = 0;
		var numGuest = model.getNumberOfGuests();
		for(i = 0; i < dish.length; i++){
			totalPrice = totalPrice + dish[i].price;
		}
		$("#view2_pending_cost").html(totalPrice*numGuest);
		$("#view2_sek_paragraph").html("SEK " + totalPrice*numGuest);
	}
	
}
$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	var viewCache;

	
	

	//And create the needed controllers and views
	//var exampleView = new ExampleView($("#exampleView"));
	//exampleView.numberOfGuests.html(model.getNumberOfGuests());
	//exampleView.totalCost.html(model.getTotalMenuPrice());

	var view3 = new view2Func($("#View2"),model);
});

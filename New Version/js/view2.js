//$.getScript("js/view3.js");
var view2Func = function (container,model){
	if(document.getElementById("View4") != null){
		this.View2 = container.find("#view2_pending_cost");
		var dish = model.getDishById(100).ingredients;
		var totalPrice = 0;
		for(i = 0; i < dish.length; i++){
			totalPrice = totalPrice + dish[i].price;
		}
		this.View2.html(totalPrice);
		container.find("#view2_sek_paragraph").html("SEK " + totalPrice);
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

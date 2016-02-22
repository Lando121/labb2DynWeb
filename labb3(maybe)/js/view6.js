//$.getScript("js/view3.js");
var view6Func = function (container, model){
	model.setNumberOfGuests(4);

	var menu = model.getFullMenu();
	model.addObserver(this);
	
	for(k = 0; k<menu.length; k++){
		$("#View6").append("<div class='row view6_dishrow'> <div class='col-xs-6 col-sm-2'><img id='view6_dish" + k + "_img' src ='images/" + menu[k].image +  "' class='view3_dish_img'></div><div class='col-xs-6 col-sm-4'><h1 class='view6_dishname' id='view6_dish" + k + "'>" + menu[k].name + "</h1><p id='dish" + k + "_description'>" + menu[k].description + "</p></div><div class='col-xs-12 col-sm-6'><h1 id='view6_dishpreparation'>Preparation</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div></div>")
	}
	

	
	var update = function(obj){


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

	var view6 = new view6Func($("#View6"), model);
});

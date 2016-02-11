$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	var viewCache; 

	//And create the needed controllers and views
	//var exampleView = new ExampleView($("#exampleView"));
	//exampleView.numberOfGuests.html(model.getNumberOfGuests());
	//exampleView.totalCost.html(model.getTotalMenuPrice());

	showScreens(1);

});

// skapar en funktion som displayar screen

function showScreens(id){
	// Gör en AJAX-request som hämtar t.ex. screen1.html
	$.ajax({url:'views.html',success: function(views) {
		$.ajax({url:"screen"+id+".html", success: function(screen){
        	console.log(screen);
    	}});
	}});
}



$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	//And create the needed controllers and views
	//var exampleView = new ExampleView($("#exampleView"));
	//exampleView.numberOfGuests.html(model.getNumberOfGuests());
	//exampleView.totalCost.html(model.getTotalMenuPrice());

showScreens();

});

// skapar en funktion som displayar screen
function showScreens(){
	// Gör en AJAX-request som hämtar screen1.html
	$.ajax({url:"screen1.html", success: function(result){
        $("#View1").html(result);
    }});
}



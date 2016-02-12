$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	var viewCache; 

	//And create the needed controllers and views
	//var exampleView = new ExampleView($("#exampleView"));
	//exampleView.numberOfGuests.html(model.getNumberOfGuests());
	//exampleView.totalCost.html(model.getTotalMenuPrice());

	showScreens(1); //visar screen1

	$.ajaxSetup ({
	    // Disable caching of AJAX responses
	    cache: false
	});

});

// skapar en funktion som displayar screen

function showScreens(id){
	// Gör en AJAX-request som hämtar t.ex. screen1.html
	// 1. hämtar in alla views
	$.ajax({url:'views.html',success: function(views) {
		views = $(views);
	// 2. hämtar det screen vi vill komma åt ex. 1
		$.ajax({url:"screens/screen"+id+".html", success: function(screenHtml){
			var screen = $(screenHtml);
	//3. går igenom varje viewtag som finns i screen-filen
			screen.each(function(){
        		for(var i=0; i < views.length; i++) {
        			if(views[i].id == this.id) {
        				$(this).html(views[i].innerHTML); //innerHTML hämtar all html som finns i views-taggen från view.html
        			}
        		}
        	});
        	$("#viewsContainer").html(screen); //viewscontainer finns i index.html
    	}});
	}});
}



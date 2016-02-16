//$.getScript("js/view3.js");
var view3Func = function (container){

	this.View3 = container.find("#test");
	this.View3.html("hejhej");
	
}
$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	var viewCache;

	
	

	//And create the needed controllers and views
	//var exampleView = new ExampleView($("#exampleView"));
	//exampleView.numberOfGuests.html(model.getNumberOfGuests());
	//exampleView.totalCost.html(model.getTotalMenuPrice());

	showScreens(1);

	var view2 = new 
	var view3 = new view3Func($("#View3"));

/*	$.ajaxSetup ({
	    // Disable caching of AJAX responses
	    cache: false
	});

*/
 
});

// skapar en funktion som displayar screen

/*function showScreens(id){
	// Gör en AJAX-request som hämtar t.ex. screen1.html
	$.ajax({url:'views.html',success: function(views) {
		views = $(views);
		$.ajax({url:"screens/screen"+id+".html", success: function(screenHtml){
			var screen = $(screenHtml);
			screen.each(function(){
        		for(var i=0; i < views.length; i++) {
        			if(views[i].id == this.id) {
        				$(this).html(views[i].innerHTML); //innerHTML hämtar all html som finns i views-taggen
        			}
        		}
        	});
        	$("#viewsContainer").html(screen);
        	

    	}});
	}});

}
*/



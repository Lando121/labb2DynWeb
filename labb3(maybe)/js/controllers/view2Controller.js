
var view2Controller = function(view, model) {
 	$("#peopleInput").on("change", function(){
 		model.setNumberOfGuests($("#peopleInput").val());

 	});

 	if(model.getFullMenu().length > 0){
 		$('#confirmButton').click(function() {
    		$("#View2_after").hide();
    		$("#View3").hide();
    		$("#View5").show();
    	
});

 	}
 
 	$(".view2_menuItem").on("click",function(event){
 			console.log("dad");
 			model.setSpecificDish(this.getAttribute("dishID"));
			$("#View3").hide();
			$("#View4").show();
			 console.log("You clicked on: ", event.target);

			 			

		
					

 	});


}
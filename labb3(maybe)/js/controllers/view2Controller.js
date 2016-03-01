
var view2Controller = function(view, model) {
 	$("#peopleInput").on("change", function(){
 		model.setNumberOfGuests($("#peopleInput").val());

 	});

 	
 		$('#confirmButton').click(function() {
 			if(model.getFullMenu().length > 0){
    			$("#View2_after").hide();
    			$("#View3").hide();
    			$("#View4").hide();
    			$("#View5").show();
    		}
    	
		});

 	/**$("#View2_after").delegate(".view2_menuItem","click",function(){
 			console.log("dad");
 			model.setSpecificDish(this.getAttribute("dishID"));
			$("#View3").hide();
			$("#View4").show();
			 



		
					

 	});**/


}

var view2Controller = function(view, model) {
 	$("#peopleInput").on("change", function(){
 		console.log("click");
 		model.setNumberOfGuests($("#peopleInput").val());

 	});
 	console.log(model.getFullMenu());
 	if(model.getFullMenu().length > 0){
 		$('#confirmButton').click(function() {
    		$("#View2_after").hide();
    		$("#View3").hide();
    		$("#View5").show();
    	
});

 	}


}

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

 	$("#view2after_name").click(function(){
			$("#View3").hide();
			$("#View4").show();
			$("#view2after_name").html(model.getSelectedDish());
					

 	});


}
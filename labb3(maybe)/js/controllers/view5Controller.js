var view5Controller = function(view, model) {
	$('#goBack').click(function() {
    	$("#View5").hide();
    	$("#View2_after").show();
    	$("#View3").show();
	});
    
	$('#view5_printRecipe').click(function(){
		$("#View2_after").hide();
    	$("#View3").hide();
    	$("#View5").hide();
    	$("#View6").show();




    });

}

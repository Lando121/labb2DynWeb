
var view2Controller = function(view, model) {
 	$("#peopleInput").on("change", function(){
 		console.log("click");
 		$("#peopleInput").val(model.setNumberOfGuests());

 	});

}
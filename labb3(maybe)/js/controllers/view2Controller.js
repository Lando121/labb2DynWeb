
var view2Controller = function(view, model) {
 	$("#peopleInput").on("change", function(){
 		console.log("click");
 		model.setNumberOfGuests($("#peopleInput").val());

 	});

}
console.log("hej");
var View2Controller = function(view, model ) {
 	$("#peopleInput").on("change", function(){
 		console.log("click");
 		model.setNumberOfGuests();

 	});





 /** view.plusButton.click(function(){
 model.setNumberOfGuests(model.getNumberOfGuests() + 1);
 });
 
 view.minusButton.click(function(){
 model.setNumberOfGuests(model.getNumberOfGuests() - 1);
 }); **/
}
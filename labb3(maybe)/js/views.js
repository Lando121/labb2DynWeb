var view1Func = function (container){
	
	
}
//$.getScript("js/view3.js");
var view2afterFunc = function (container,model){
//view2 screen after pending update
	var numGuest = model.getNumberOfGuests();
	$("#peopleInput").val(numGuest);	
	var menu = model.getFullMenu();
	var totalCost = 0;
	model.addObserver(this);
	for(m = 0; m<menu.length; m++){
		dishPrice = model.getDishPrice(menu[m].id);
		totalPrice = dishPrice*numGuest;
		totalCost = totalCost + dishPrice*numGuest;
		$("#view2after").append("<div class='col-xs-6 left_align_par orange_paragraph_view2' id='view2after_name'" +"'>"+ menu[m].name + "</div>" 
			+ "<div class='col-xs-6 right_align_par orange_paragraph_view2' id='view2after_pending_cost'"+ "'>" + totalPrice + "</div><div class='clearfix'></div>");
		//$("#view2after_pending_cost").html(totalPrice);
		//$("#view2after_name").html(menu[m].name);
	}

	function update(obj){
		console.log("yes");

	}
	
		$("#view2after_sek_paragraph").html("SEK " + totalCost);

}

var view3Func = function (container,model){

	var showing = model.getTypeDish("main dish");


	model.addObserver(this);
		
	for(i = 0; i<showing.length; i++){
		$("#view3_dish_row").append("<div class='col-sm-12 col-sm-2 view3_dish_col'><div class='row view3_dish_obj'><img src='images/" + showing[i].image +  "' class='view3_dish_img'></div>" + "<div class='row view3_dish_obj view3_dish_name'>" + showing[i].name + "</div>"+"<div class='row view3_dish_info'>" + showing[i].description + "</div> </div>");
		
	}	
	var update = function(obj){


}
	
}

//$.getScript("js/view3.js");
var view4Func = function (container, model){

	$("#view4_dish_img").attr("src", "images/" +  model.getDishById(1).image);
	$("#view4_dish_name").html(model.getDishById(1).name);
	$("#view4_description_paragraph").html(model.getDishById(1).description);
	$("#view4_amount_of_people").html(model.getNumberOfGuests());

	model.addObserver(this);
	
	var middleBox = container.find("#view4_recipe_middle_box");
	var dish = model.getDishById(1).ingredients; 
	var totalPrice = 0;
	var numGuest = model.getNumberOfGuests();
	for(i = 0; i < dish.length; i++){
		totalPrice = totalPrice + dish[i].price;
		middleBox.append('<div class="row view4_ingredient_row"><div class="col-xs-2">' + dish[i].quantity*numGuest + " " + dish[i].unit + "</div><div class='col-xs-6'>" + dish[i].name + "</div><div class='col-xs-2 right_align_par'>" + "SEK" + "</div><div class='col-xs-2 right_align_par'>" + dish[i].price*numGuest + "</div></div>");
	
	}
	var update = function(obj){
		$("#view4_amount_of_people").val(model.getNumberOfGuests());

}
	
	$("#view4_total_cost").html(totalPrice*numGuest);
	

}


var view5Func = function (container, model){

	var numGuest = model.getNumberOfGuests();
	var menu = model.getFullMenu();
	var totalCost = 0;
	model.addObserver(this);
	for(k = 0; k<menu.length; k++){
		totalCost = totalCost + model.getDishPrice(menu[k].id)*numGuest;
		$("#view5_centerPics").append("<div class='col-xs-12 col-sm-4 _dish_col'><div class='row view3_dish_obj'><img src='images/" + menu[k].image + "' class='view3_dish_img'></div>" + "<div class='row view3_dish_obj view3_dish_name' id='view5_dish'" + k +"_name'>"+ menu[k].name + "</div>" +"<div class='row view3_dish_info'><p class='view5_price' id='view5_price_dish"+ k + "'>" + model.getDishPrice(menu[k].id)*numGuest +" kr</p></div></div>");
		
	}

	$("#total_price").html(totalCost + " kr");
	$("#view5_amount_people").html(model.getNumberOfGuests());
	
	var update = function(obj){


	}
}

var view6Func = function (container, model){
	model.setNumberOfGuests(4);

	var menu = model.getFullMenu();
	model.addObserver(this);
	
	for(k = 0; k<menu.length; k++){
		$("#View6").append("<div class='row view6_dishrow'> <div class='col-xs-6 col-sm-2'><img id='view6_dish" + k + "_img' src ='images/" + menu[k].image +  "' class='view3_dish_img'></div><div class='col-xs-6 col-sm-4'><h1 class='view6_dishname' id='view6_dish" + k + "'>" + menu[k].name + "</h1><p id='dish" + k + "_description'>" + menu[k].description + "</p></div><div class='col-xs-12 col-sm-6'><h1 id='view6_dishpreparation'>Preparation</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div></div>")
	}
	

	
	var update = function(obj){


	}
}


$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	var viewCache;

	
	

	//And create the needed controllers and views
	//var exampleView = new ExampleView($("#exampleView"));
	//exampleView.numberOfGuests.html(model.getNumberOfGuests());
	//exampleView.totalCost.html(model.getTotalMenuPrice());

	var view1 = new view1Func($("#View1"),model);
	var view2after = new view2afterFunc($("#view2after"),model);
	var view3 = new view3Func($("#View3"),model);
	var view4 = new view4Func($("#View4"),model);
	var view5 = new view5Func($("#View5"),model);
	var view6 = new view6Func($("#View6"),model);
});

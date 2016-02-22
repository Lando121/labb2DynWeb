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
	view2after.load();
	model.addObserver(view2after);

	var view3 = new view3Func($("#View3"),model);
	view3.load();
	model.addObserver(view3);
	var view3Cont = new view3Controller(view3, model);

	var view4 = new view4Func($("#View4"),model);
	model.addObserver(view4);
	view4.load();

	var view5 = new view5Func($("#View5"),model);
	model.addObserver(view5);
	view5.load();

	var view6 = new view6Func($("#View6"),model);
	model.addObserver(view6);
	view6.load();

});
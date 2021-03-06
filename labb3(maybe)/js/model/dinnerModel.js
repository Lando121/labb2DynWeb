//DinnerModel Object constructor
var DinnerModel = function() {
 
	//TODO Lab 2 implement the data structure that will hold number of guest
	// and selected dinner options for dinner menu
	var numGuests = 1;
	var selectedDishes = [];
	var obsArray = new Array();
	var specificDish;


	this.setNumberOfGuests = function(num) {
		//TODO Lab 2
		numGuests = num;
		this.notifyObservers();
	}

	this.setSpecificDish = function(obj){
		specificDish = obj;
		this.notifyObservers(obj);
		
		
	}

	this.getSpecificDish = function(){
		if(specificDish == null){
			return null;
		}
		return specificDish;
	}


	// should return 
	this.getNumberOfGuests = function() {
		//TODO Lab 2'
		return numGuests;
	}

	/**this.getDishById = function(id) {
		
		for(i = 0; i < dishes.length; i++){	
			if(id==dishes[i].id) {
				return dishes[i];
			}
		}
	
<<<<<<< HEAD
	}
	**/


	//Returns the dish that is on the menu for selected type 
	this.getSelectedDish = function() {
		//TODO Lab 2
		for(i = 0; i < selectedDishes.length; i++){
			if(selectedDishes[i].Category == Category){
				return selectedDishes[i];
			} else {
				console.log("no dish choosed for that type");
			}
		}
	}

	/**this.getTypeDish = function(type) {
		//TODO Lab 2
		var typeDishes = new Array();
		for(i = 0; i < dishes.length; i++){
			if(dishes[i].type == type){
				typeDishes.push(dishes[i]);
			}
		}
		return typeDishes;
	}**/

	/**this.getSelectedDishIds = function(){
		return selectedDishes;
	}**/
	//Returns all the dishes on the menu.
	this.getFullMenu = function() {
		//TODO Lab 2
		return selectedDishes;
	}

	//Returns all ingredients for all the dishes on the menu.
	this.getAllIngredients = function() {
		//TODO Lab 2 PSEUDO!!
		var ingredientsList = new Array();
		for(i = 0; i < selectedDishes.length; i++){
			ingredientsList.push(selectedDishes[i].Ingredients);
		}
		return ingredientsList;
	}

	this.getDishPrice = function(obj){
		var cost = 0;
		for(i=0; i<obj.Ingredients.length;i++){
			cost = cost+obj.Ingredients[i].Quantity;
		}
		return cost;
	}

	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function() {
		//TODO Lab 2
		var totalCost = 0;
		for(i = 0; i < selectedDishes.length; i++){
			totalCost = totalCost + (this.getNumberOfGuests() * this.getDishPrice(selectedDishes[i]));
			
		}
		return totalCost;
	}

	
	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = function(obj) {

		//TODO Lab 2 
	//var dish = this.getDishById(id);
	for( j= 0; j < selectedDishes.length; j++){
		if(obj.Category==selectedDishes[j].Category){
			delete selectedDishes[j];
			selectedDishes[j] = obj;
			this.notifyObservers();
			return;
		}
		}
		selectedDishes.push(obj);
		this.notifyObservers();
	}

	//Removes dish from menu
	this.removeDishFromMenu = function(obj) {
		for(i = 0; i < selectedDishes.length; i++){
			if(selectedDishes[i] == obj){
				selectedDishes.splice(i, 1);
			}
		}
		this.notifyObservers();
		//TODO Lab 2
	}


	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned
	

	//function that returns a dish of specific ID
	this.getDish = function (callback, id, view) {


	   var apiKey = "66J8l00npnHHZcCNLRhxkfW1OHxbojy4";
        var url = "http://api.bigoven.com/recipe/"  + id + "?api_key=" + apiKey;
        $.ajax({
            type: "GET",
            dataType: 'json',
            cache: false,
            url: url,
            success:callback,
            error: function(data, exception){
          				
                    	self.notifyObservers(data, view, exception);
                    }
                         
           
        });
	}

	this.addObserver = function(observer) {

		obsArray.push(observer);
		

	}
	this.notifyObservers = function(obj, view, exception) {
		for(u=0 ; u<obsArray.length; u++){
			obsArray[u].update(obj, view, exception);
			
		}
	}
	var self = this;
	this.getAllDishes = function (callback, type, filter, view) {

            var apiKey = "66J8l00npnHHZcCNLRhxkfW1OHxbojy4";

            var url = "http://api.bigoven.com/recipes?pg=1&rpp=100&any_kw="
                  + type 
                  + "&api_key="+apiKey;
            $.ajax({
                    type: "GET",
                    dataType: 'json',
                    cache: false,
                    url: url,
                    success: callback,
                    error: function(data, exception){
                    	self.notifyObservers(data, view, exception);
                    }
                });
        
	}


	// the dishes variable contains an array of all the 
	// dishes in the database. each dish has id, name, type,
	// image (name of the image file), description and
	// array of ingredients. Each ingredient has name, 
	// quantity (a number), price (a number) and unit (string 
	// defining the unit i.e. "g", "slices", "ml". Unit
	// can sometimes be empty like in the example of eggs where
	// you just say "5 eggs" and not "5 pieces of eggs" or anything else.
	var dishes = [{
		'id':1,
		'name':'French toast',
		'type':'starter',
		'image':'toast.jpg',
		'description':"In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
		'ingredients':[{ 
			'name':'eggs',
			'quantity':0.5,
			'unit':'',
			'price':10
			},{
			'name':'milk',
			'quantity':30,
			'unit':'ml',
			'price':6
			},{
			'name':'brown sugar',
			'quantity':7,
			'unit':'g',
			'price':1
			},{
			'name':'ground nutmeg',
			'quantity':0.5,
			'unit':'g',
			'price':12
			},{
			'name':'white bread',
			'quantity':2,
			'unit':'slices',
			'price':2
			}]
		},{
		'id':2,
		'name':'Sourdough Starter',
		'type':'starter',
		'image':'sourdough.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'active dry yeast',
			'quantity':0.5,
			'unit':'g',
			'price':4
			},{
			'name':'warm water',
			'quantity':30,
			'unit':'ml',
			'price':0
			},{
			'name':'all-purpose flour',
			'quantity':15,
			'unit':'g',
			'price':2
			}]
		},{
		'id':3,
		'name':'Baked Brie with Peaches',
		'type':'starter',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'round Brie cheese',
			'quantity':10,
			'unit':'g',
			'price':8
			},{
			'name':'raspberry preserves',
			'quantity':15,
			'unit':'g',
			'price':10
			},{
			'name':'peaches',
			'quantity':1,
			'unit':'',
			'price':4
			}]
		},{
		'id':100,
		'name':'Meat balls',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
		'ingredients':[{ 
			'name':'extra lean ground beef',
			'quantity':115,
			'unit':'g',
			'price':20
			},{
			'name':'sea salt',
			'quantity':0.7,
			'unit':'g',
			'price':3
			},{
			'name':'small onion, diced',
			'quantity':0.25,
			'unit':'',
			'price':2
			},{
			'name':'garlic salt',
			'quantity':0.7,
			'unit':'g',
			'price':2
			},{
			'name':'Italian seasoning',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'dried oregano',
			'quantity':0.3,
			'unit':'g',
			'price':3
			},{
			'name':'crushed red pepper flakes',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'Worcestershire sauce',
			'quantity':6,
			'unit':'ml',
			'price':7
			},{
			'name':'milk',
			'quantity':20,
			'unit':'ml',
			'price':4
			},{
			'name':'grated Parmesan cheese',
			'quantity':5,
			'unit':'g',
			'price':8
			},{
			'name':'seasoned bread crumbs',
			'quantity':15,
			'unit':'g',
			'price':4
			}]
		},{
		'id':101,
		'name':'MD 2',
		'type':'main dish',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':15,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':10,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':102,
		'name':'MD 3',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':2,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':10,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':5,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':103,
		'name':'MD 4',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':4
			},{
			'name':'ingredient 2',
			'quantity':12,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':6,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':200,
		'name':'Chocolat Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':201,
		'name':'Vanilla Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':202,
		'name':'Strawberry',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{ 
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		}
	];
	

}

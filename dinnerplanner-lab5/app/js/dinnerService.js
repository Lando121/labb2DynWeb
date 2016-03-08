// Here we create an Angular service that we will use for our 
// model. In your controllers (or other services) you can include the
// dependency on any service you need. Angular will insure that the
// service is created first time it is needed and then just reuse it
// the next time.
dinnerPlannerApp.factory('Dinner',function ($resource) {


  // TODO in Lab 5: Add your model code from previous labs
  // feel free to remove above example code
  // you will need to modify the model (getDish and getAllDishes) 
  // a bit to take the advantage of Angular resource service
  // check lab 5 instructions for details

  //DinnerModel Object constructor

 
  //TODO Lab 2 implement the data structure that will hold number of guest
  // and selected dinner options for dinner menu
  var numGuests = 1;
  var selectedDishes = [];
  var obsArray = new Array();
  var specificDish;


  this.setNumberOfGuests = function(num) {
    //TODO Lab 2
    numGuests = num;
    
  }

  this.setSpecificDish = function(obj){
    specificDish = obj;
    
    
    
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
       
        return;
      }
    }
    selectedDishes.push(obj);

  }

  //Removes dish from menu
  this.removeDishFromMenu = function(obj) {
    for(i = 0; i < selectedDishes.length; i++){
      if(selectedDishes[i] == obj){
        selectedDishes.splice(i, 1);
      }
    }
  
    //TODO Lab 2
  }


  //function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
  //you can use the filter argument to filter out the dish by name or ingredient (use for search)
  //if you don't pass any filter all the dishes will be returned
  

  //function that returns a dish of specific ID
this.DishSearch = $resource('http://api.bigoven.com/recipes',{pg:1,rpp:25,api_key:'0OV23011kU7B3VVVgxTTTIfdNXeTI3us'});

this.Dish = $resource('http://api.bigoven.com/recipe/:id',{api_key:'0OV23011kU7B3VVVgxTTTIfdNXeTI3us'}); 




  






  // Angular service needs to return an object that has all the
  // methods created in it. You can consider that this is instead
  // of calling var model = new DinnerModel() we did in the previous labs
  // This is because Angular takes care of creating it when needed.
  return this;

});
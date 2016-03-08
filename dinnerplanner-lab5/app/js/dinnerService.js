// Here we create an Angular service that we will use for our 
// model. In your controllers (or other services) you can include the
// dependency on any service you need. Angular will insure that the
// service is created first time it is needed and then just reuse it
// the next time.
dinnerPlannerApp.factory('Dinner',function ($resource,$cookieStore) {


  // TODO in Lab 5: Add your model code from previous labs
  // feel free to remove above example code
  // you will need to modify the model (getDish and getAllDishes) 
  // a bit to take the advantage of Angular resource service
  // check lab 5 instructions for details

  //DinnerModel Object constructor

 
  //TODO Lab 2 implement the data structure that will hold number of guest
  // and selected dinner options for dinner menu
  var numGuests = $cookieStore.get("guests");
  
  var selectedDishesIDs = $cookieStore.get("dishIDs");
  var selectedDishes = [];
  var obsArray = new Array();
  var specificDish;


  this.setNumberOfGuests = function(num) {
    //TODO Lab 2
    numGuests = num;
    $cookieStore.put("guests", numGuests);
    
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
    if(numGuests == null){
      return 0;
    }
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
    if(selectedDishes.length == 0){
      this.fillMenu();
    }
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
    if(obj.Ingredients == null){
      return;
    }
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

    for(k = 0; k < selectedDishes.length; k++){
      

      totalCost = totalCost + (this.getNumberOfGuests() * this.getDishPrice(selectedDishes[k]));
      
    }
    return totalCost;
  }

  
  //Adds the passed dish to the menu. If the dish of that type already exists on the menu
  //it is removed from the menu and the new one added.
  this.addDishToMenu = function(obj) {
    if(selectedDishesIDs == null){
      selectedDishesIDs = [];
    }

    //TODO Lab 2 
  //var dish = this.getDishById(id);
    for( j= 0; j < selectedDishes.length; j++){
      if(obj.Category==selectedDishes[j].Category){
        delete selectedDishes[j];
        selectedDishes.splice(j,1);
        selectedDishesIDs.splice(j,1);
        break;
      }
    }
    selectedDishes.push(obj);
    selectedDishesIDs.push(obj.RecipeID);
    console.log(selectedDishesIDs);
    $cookieStore.put("dishIDs", selectedDishesIDs);
  }

  this.fillMenu = function(){
     if(selectedDishesIDs == null){
      selectedDishesIDs = [];
    }
    for(i = 0; i < selectedDishesIDs.length; i++){
      selectedDishes[i] = this.Dish.get({id:selectedDishesIDs[i]});
    }
    return selectedDishes;
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
this.DishSearch = $resource('http://api.bigoven.com/recipes',{pg:1,rpp:25,api_key:'1hg3g4Dkwr6pSt22n00EfS01rz568IR6'});

this.Dish = $resource('http://api.bigoven.com/recipe/:id',{api_key:'1hg3g4Dkwr6pSt22n00EfS01rz568IR6'}); 




  






  // Angular service needs to return an object that has all the
  // methods created in it. You can consider that this is instead
  // of calling var model = new DinnerModel() we did in the previous labs
  // This is because Angular takes care of creating it when needed.
  return this;

});
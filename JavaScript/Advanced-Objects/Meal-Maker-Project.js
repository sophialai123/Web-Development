/* A restaurant has hired you to create a function for their website that allows them to set a meal and price each morning for Today’s Special. Use your knowledge of getters and setters to make sure anyone who uses the new function can generate a meal and a price for Today’s Special without any embarrassing errors! */


const menu = {
  _meal: " ",
  _price: 0,

  //Add Setter Methods
  set meal(mealToCheck) {
    if (typeof mealToCheck === "string") {
      //_meal assigned as the value
      return this._meal = mealToCheck;
    }
  },

  set price(priceToCheck) {
    if (typeof priceToCheck === "number") {
      return this._price = priceToCheck;
    }
  },

  //Add a Getter Method
  get todaysSpecial() {
    //check if _meal and _price values exist (or are both truthy values)
    if (this._meal && this._price) {
      return `Today’s Special is ${this._meal} for $${this._price}!`
    } else {
      return 'Meal or price was not set correctly!'
    }
  }
};

//can directly manipulate an object property 
//setter method on menu to assign
menu.meal = "fried rice";
menu.price = 18;
console.log(menu)

//use the getter method to console.log() Today’s Special.
console.log(menu.todaysSpecial)
/* Book:
Properties: author (string), title (string), pages (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty).
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
Movie:
Properties: director (string), title (string), runTime (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty)
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
CD:
Properties: artist (string), title (string), isCheckedOut (boolean, initially false), and ratings (array, initially empty), songs (array of strings)
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating() */


//Create an Parentx class called Media.

class Media {

  //one property is in all three subclasses of Media, 
  //and(title) does not have a default value.
  constructor(title) {
    //set the values for Media properties that Book, CD, and Movie share.
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }


  //Create getters for the title, isCheckedOut, and ratings properties to get the all the values
  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }


  //Create a setter for the isCheckedOut property and can change the values.
  set isCheckedOut(newIsCheckedOut) {
    this._isCheckedOut = newIsCheckedOut;
  }


  //create a method named toggleCheckOutStatus that changes the value saved to the _isCheckedOut property
  toggleCheckOutStatus() {

    // with no underscore because we use this getter method
    this.isCheckedOut = !this.isCheckedOut;
  }

  //create a method named getAverageRating. Return the average value of the ratings array.
  getAverageRating() {

    // let sumArray = this.ratings.reduce((previousValue, currentValue) => (previousValue + currentValue));

    // //return average value;
    // return sumArray / (this.ratings.length);

    //return average value ine one line
    return this.ratings.reduce((previousValue, currentValue) => (previousValue + currentValue)) / this.ratings.length;
  }

  //add a method named addRating that accepts one argument 
  //and uses .push() to add it to the end of the ratings array
  addRating(value) {
    this.ratings.push(value);
  }

}



//Build a child Book class that extends Media.
class Book extends Media {

  constructor(author, title, pages) {

    //Call super of the Books‘s constructor method
    super(title);

    //Book properties that do not have default values
    this._author = author;
    this._pages = pages;
  }

  // Create Book all properties that have a getter
  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }

  //Book Methods share with Parent class Meida methods and setters
}


//Create a Book instance with the 3 properties
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

//Call.toggleCheckOutStatus() on the historyOfEverything instance.
historyOfEverything.toggleCheckOutStatus();

//Log the value saved to the isCheckedOut property in the historyOfEverything instance.
console.log(historyOfEverything.isCheckedOut)


//Call .addRating() three times on historyOfEverything with inputs of 4, 5, and 5.
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

//Call .getAverageRating() on historyOfEverything. Log the result to the console.
console.log(historyOfEverything.getAverageRating());





//Build a child Movie class that extends Media.
class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._direcotr = director;
    this._runTime = runTime
  }

  // getter with all properties
  get director() {
    return this._direcotr;
  }

  get runTime() {
    return this._runTime;
  }
  //Movie Methods share with Parent class Meida methods

}


//Create a Movie instance with the 3 properties:
const speed = new Movie('Jan de Bont', 'Speed', 116);

//Call.toggleCheckOutStatus() on the speed instance.
speed.toggleCheckOutStatus();

//Log the value saved to the isCheckedOut property in the speed instance
console.log(speed.isCheckedOut);

//Call .addRating() three times on speed with inputs of 1, 1, and 5.
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

//Call.getAverageRating() on speed.Log the result to the console.
console.log(speed.getAverageRating());



//Create a CD class that extends Media.
class CD extends Media {
  constructor(artist, title, songs) {
    super(title);
    this._artist = artist;
    this._title = title;
    this._songs = songs;
  }

  //getter with all properties
  get artist() {
    return this._artist;
  }

  get songs() {
    return this._songs;
  }



  //Create a method called shuffle for the CD class.
  //The method returns a randomly sorted array of all the songs in the songs property.
  shuffle() {
    Math.floor(Math.random() * 5)
  }


}


//In.addRating(), make sure input is between 1 and 5.


//Create class called Catalog that holds all of the Media items in our library.



//to get avgnumber
numbers = [10, 10, 10, 10, 10];
let avg = numbers.reduce((a, b) => (a + b)) / numbers.length;
console.log(avg);

# Classes

### JavaScript is an object-oriented programming (OOP) language we can use to model real-world items
---
### Introduction to Classes
```
class Dog {

  //Create constructor
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }


  // Methods, no commas between them

  get name() {
    return this._name;
  }
  get behavior() {
    return this._behavior;
  }   

  incrementBehavior() {
    this._behavior ++;
  }
}


//Instance
const halley = new Dog('Halley'); // Create new Dog instance and name "Hally".


//Method Calls
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console


halley.incrementBehavior(); // Add one to behavior
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console
```
--- 
#### Constructor
- Dog is the name of our class. By convention, we capitalize and CamelCase class names.
  
- JavaScript calls the constructor() method every time it creates a new instance of a class.
  
- Created a class called Dog, and used it to produce a Dog object.
  
- This constructor() method accepts one argument, name.
  
- Inside of the constructor() method, we use the this keyword. In the context of a class, this refers to an instance of that class. In the Dog class, we use this to set the value of the Dog instance’s name property to the name argument.
  
- Under this.name, we create a property called behavior, which will keep track of the number of times a dog misbehaves. The behavior property is always initialized to zero.

---
#### Instance
- Below our Dog class, we use the new keyword to create an instance of our Dog class.
  
- We create a new variable named halley that will store an instance of our Dog class.
  
- We use the new keyword to generate a new instance of the Dog class. The new keyword calls the constructor(), runs the code inside of it, and then returns the new instance.

- We pass the 'Halley' string to the Dog constructor, which sets the name property to 'Halley'.
  
- Finally, we log the value saved to the name key in our halley object, which logs 'Halley' to the console.

---

#### Methods
- we add getter methods for name and behavior
  
- Notice, we also prepended our property names with underscores (_name and _behavior), which indicate these properties should not be accessed directly.
  
- Under the getters, we add a method named .incrementBehavior().
  
- When you call .incrementBehavior() on a Dog instance, it adds 1 to the _behavior property. Between each of our methods, we did not include commas.

---

### Method Calls
##### Let’s take a moment to create two Dog instances and call our .incrementBehavior() method on one of them.

```
let nikko = new Dog('Nikko'); // Create dog named Nikko

nikko.incrementBehavior(); // Add 1 to nikko instance's behavior

let bradford = new Dog('Bradford'); // Create dog name Bradford

console.log(nikko.behavior); // Logs 1 to the console

console.log(bradford.behavior); // Logs 0 to the console
```

- we create two new Dog instances, nikko and bradford。
  
- Because we increment the behavior of our nikko instance, but not bradford, accessing nikko.behavior returns 1 and accessing bradford.behavior returns 0.

--- 

### Inheritance I
-  When multiple classes share properties or methods, they become candidates for inheritance — a tool developers use to decrease the amount of code they need to write.
  
- With inheritance, you can create a parent class (also known as a superclass) with properties and methods that multiple child classes (also known as subclasses) share. The child classes inherit the properties and methods from their parent class.

### Let’s abstract the shared properties and methods from our Cat and Dog classes into a parent class called Animal.
```

//parent class called Animal
class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
 
  get name() {
    return this._name;
  }
 
  get behavior() {
    return this._behavior;
  }   
 
  incrementBehavior() {
    this._behavior++;
  }
} 



//Child class Cat
class Cat {
  constructor(name, usesLitter) {
    this._name = name;
    this._usesLitter = usesLitter;
    this._behavior = 0;
  }
 
  get name() {
    return this._name;
  }
 
  get usesLitter() {
    return this._usesLitter;
  }
 
  get behavior() {
    return this._behavior;
  }  
 
  incrementBehavior() {
    this._behavior++;
  }
}

```

- In the example above, the Animal class contains the properties and methods that the Cat and Dog classes share (name, behavior, .incrementBehavior()).

- The diagram shows the relationships we want to create between the Animal, Cat, and Dog classes.
  
  ![](parentClass.png)

---

### Inheritance III
- Now that we have these shared properties and methods in the parent Animal class, we can extend them to the subclass, Cat.

```
class Cat extends Animal {
  constructor(name, usesLitter) {
    super(name);
    this._usesLitter = usesLitter;
  }
}

```
  - In the example above, we create a new class named Cat that extends the Animal class. Let’s pay special attention to our new keywords: extends and super.
  
  - The extends keyword makes the methods of the animal class available inside the cat class.

  - The constructor, called when you create a new Cat object, accepts two arguments, name and usesLitter.

  - The super keyword calls the constructor of the parent class. In this case, super(name) passes the name argument of the Cat class to the constructor of the Animal class. When the Animal constructor runs, it sets this._name = name; for new Cat instances.

  - _usesLitter is a new property that is unique to the Cat class, so we set it in the Cat constructor.

  - Notice, we call super on the first line of our constructor(), then set the usesLitter property on the second line. In a constructor(), you must always call the super method before you can use the this keyword — if you do not, JavaScript will throw a reference error. To avoid reference errors, it is best practice to call super on the first line of subclass constructors.
  
  




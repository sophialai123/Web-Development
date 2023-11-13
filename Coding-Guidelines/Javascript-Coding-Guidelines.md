# JavaScript Coding Guidelines

## **General Principles**

- **Readability**: Prioritize writing code that's easy to read and understand.
- **Consistency**: Maintain a consistent style throughout your codebase.
- **DRY Principle**: "Don't Repeat Yourself". Aim for code reuse and avoid repetition.
- **Comments**: Use comments judiciously. They should explain the 'why' and not the 'how'.

## **Style**

### **Naming Conventions**
- Variables and function names: Use camelCase. 
  - Example: `getUserInfo()`, `userInfo`.
- Constructor functions and classes: Use PascalCase.
  - Example: `Person`, `Car`.
- Constants: Use UPPERCASE.
  - Example: `MAX_LENGTH`, `TIMEOUT`.

### **Whitespace**
- Indentation: Use 2 or 4 spaces, ensuring consistency throughout your project.
- Spaces: Use spaces around operators and after commas.
  - Example: `var x = y + z;`.
- Line Breaks: Separate blocks of code related to different functionalities.

### **Semicolons**
- ES5: Always terminate statements with semicolons.
- ES6: Relying on Automatic Semicolon Insertion (ASI) is acceptable but be cautious.

### **Curly Braces**
- Always use curly braces with loops and conditional statements.

### **Strings**
- ES5: Use single quotes (`'`).
- ES6: Use template literals (`` ` ``) for interpolation or multi-line strings.

## **Functions**

### **Function Declarations vs. Function Expressions**
- Prefer function declarations over anonymous function expressions.
  - Example: `function myFunc() {}` over `var myFunc = function() {};`.

### **Arrow Functions (ES6)**
- Use arrow functions for a shorter syntax and when you need lexical `this`.

### **Parameters**
- Use default parameters (ES6) instead of altering function arguments.

## **Variables**

### **var, let, const**
- ES5: Use `var` for variable declarations.
- ES6: Use `let` for reassignable variables, and `const` for constants.

### **Hoisting**
- Understand that variable and function declarations are hoisted.

## **Objects and Arrays**

### **Object/Array Creation**
- Use literal syntax: `{}` for objects and `[]` for arrays.

### **Object Property Shorthand (ES6)**
- Use property value shorthand.
  - Example: `var obj = { x, y };`.

### **Destructuring (ES6)**
- Use destructuring to extract values from objects or arrays.

## **Classes (ES6)**

- Use the `class` keyword for creating classes.
- Use `extends` for inheritance.

## **Modules (ES6)**

- Use ES6 module syntax (`import`/`export`).

## **Promises and Async/Await (ES6)**

- Use Promises for asynchronous operations.
- Use `async`/`await` for cleaner asynchronous code.

## **Best Practices**

### **Avoid Global Variables**
- Encapsulate functionality within functions or modules.

### **Use `===` and `!==`**
- Avoid type coercion issues by using strict equality operators.

### **Error Handling**
- Always handle errors. Use `try`/`catch`/`finally` where necessary.


- IMP Make sure the code runs in Google Chrome, Firefox and IE
- A lot of utility Js scripts are present under 
      Pulse.WebUI -> Scripts -> Modules 
Try to use these common util scripts whereever you can as they are quite useful
- If there is code that can be used commonly, write it under any of these util scripts or create a new one
- The Vue components follow the structure
   Pulse.WebUI -> Scripts -> Vue -> Components
Any new component created should be stored under that folder.
- Try to minimize the impact of the change made to a common component by making use of (not required) props and keeping the conditional checks

NOTE: Be careful with the ES6 syntax (except for forms-webservice) as it doesn’t work for IE

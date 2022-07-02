## Currying(Closure) in JavaScript

#### Currying is a functional programming technique, we can use to write code that is modular, easy to test, and highly reusable.

---
```
//currying function
function curried_add(a) {
  // has access to the argument for a
  return function nested_add(b) {
    // has access to the arguments for a and b
    return a + b;
  }
}

// creates a local variable a and assigns it the value 1
let add_one = curried_add(1);

// add_one() still has access to the argument from curried_add()
console.log(add_one(10)); 
```

#### The argument from calling curried_add() is available to the nested functions due to closure. **A closure** means that the nested function retains the scope of parent functions based on where the function is defined, even if the nested function is executed outside of that lexical scope.
---

#### Currying with Arrow Functions
- The same curried_add() function from earlier can be rewritten much more concisely using ES6 arrow function syntax:

```
 let curried_add = a => b => a + b;
```

- Let’s break that down:

    - let curried_add is a variable assignment to the outer arrow function, a => ....
   - Calling curried_add takes an argument a and returns b => a + b.
   - Invoking the second arrow function returns the sum, or a + b.


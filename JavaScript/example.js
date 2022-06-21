
//Pass By Value
function Passbyvalue(a, b) {
  let tmp;
  tmp = b;
  b = a;
  a = tmp;
  console.log(`Inside Pass by value
		function -> a = ${a} b = ${b}`);
}

let a = 1;
let b = 2;
console.log(`Before calling Pass by value
		Function -> a = ${a} b = ${b}`);

Passbyvalue(a, b);

console.log(`After calling Pass by value
	Function -> a =${a} b = ${b}`);




//In JavaScript array and Object follows pass by reference property.
//In Pass by Reference,mutating the original value
function PassbyReference(obj) {
  let tmp = obj.a;
  obj.a = obj.b;
  obj.b = tmp;

  console.log(`Inside Pass By Reference
		Function -> a = ${obj.a} b = ${obj.b}`);
}

let obj = {
  a: 10,
  b: 20

}
console.log(`Before calling Pass By Reference
	Function -> a = ${obj.a} b = ${obj.b}`);

PassbyReference(obj)

console.log(`After calling Pass By Reference
	Function -> a = ${obj.a} b = ${obj.b}`);



//Example 1: Updating the object reference in the function.
function PassbyReference(obj) {

  // Changing the reference of the object
  obj = {
    a: 10,
    b: 20,
    c: "GEEKSFORGEEKS"
  }
  console.log(`Inside Pass by
		Reference Function -> obj `);

  console.log(obj);
}

let obj2 = {
  a: 10,
  b: 20

}
console.log(`Updating the object reference -> `)
console.log(`Before calling Pass By
		Reference Function -> obj2`);
console.log(obj2);

PassbyReference(obj2)
console.log(`After calling Pass By
		Reference Function -> obj2`);
console.log(obj2);


//Example 2: Mutating the original Object.
function PassbyReference(obj) {

  // Mutating the origanal object
  obj.c = "GEEKSFORGEEKS";
  console.log(`Inside Pass by
      Reference Function -> obj `);
  console.log(obj);
}

let objs = {
  a: 10,
  b: 20

}
console.log(`Mutating the origanal object -> `)
console.log(`Before calling Pass By
      Reference Function -> objs`);
console.log(objs);

PassbyReference(objs)
console.log(`After calling Pass By
      Reference Function -> objs`);
console.log(objs);

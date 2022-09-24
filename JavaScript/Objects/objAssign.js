const obj1 = {
  name:"sophia"
}

const obj2 = {
  age:"23"
}

const combinedObject = Object.assign(obj1, obj2);
console.log(combinedObject);

const copyObject = Object.assign({}, combinedObject);
console.log(copyObject);


//overides the object value use Object assign() method
function printName(optionObj) {
  const defaultObj = {
    firstName: "Sophia",
    lastName:"Lai"
  }

  //overides the defaultObj if optionObj is provided
  //otherwise will be defaultObj
  optionObj = Object.assign(defaultObj,optionObj) ;

  console.log(`my first name is ${optionObj.firstName} and last name is ${optionObj.lastName}`);
}

printName({});//defaultObj 
printName({firstName:"Steven"}) //overides firstName


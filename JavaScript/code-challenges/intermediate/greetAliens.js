/* Write a function, greetAliens(), that takes in an array of strings and uses a for loop to print a greeting with each string in the array.

The greeting should take the following format:
“Oh powerful [stringElement], we humans offer our unconditional surrender!”

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens);
// Should print:
// Oh powerful Blorgous, we humans offer our unconditional surrender!
// Oh powerful Glamyx, we humans offer our unconditional surrender!
// Oh powerful Wegord, we humans offer our unconditional surrender!
// Oh powerful SpaceKing, we humans offer our unconditional surrender!
Note: You may have noticed how convenient it would be to use .forEach(), but you’re not allowed to use it here. Don’t worry you’ll have plenty of opportunities to use built-in methods later on! */





const greetAliens = arr => {

  //Method1: use for of loop
  for (const stringElement of arr) {
    console.log(`This is For...of loop method: Oh powerful ${stringElement}, we humans offer our unconditional surrender!`)
  }



  //Method2: use foreach()
  arr.forEach(element => {
    console.log(`This is foreach() method: Oh powerful ${element}, we humans offer our unconditional surrender!`);

  });


  //Method3: for loop
  for (let i = 0; i < arr.length; i++) {
    console.log(`This is for loop method: Oh powerful ${arr[i]}, we humans offer our unconditional surrender!`);

  }

  //Method 4: while loop
  let stringEle = 0;
  while (stringEle < arr.length) {
    console.log(`This is while loop method: Oh powerful index: ${stringEle} : string element: ${arr[stringEle]}, we humans offer our unconditional surrender!`);
    stringEle++;

  }


}


const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens);
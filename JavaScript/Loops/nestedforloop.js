//For each round of the outer for loop, the inner for loop will run completely, run outer loop once, the inner loop will run all.

// for (let i = 0; i < 5; i++) {
//   console.log("-------------------") // more readerable
//   console.log(`This is the outer loop i output ${i}`);
//   for (let j = 0; j < 5; j++) {
//     console.log(`This is the inner loop j output ${j}`);
//   }
// }


//nested loops with arrays
// const myArray = [6, 19, 20];
// const yourArray = [19, 81, 2];

// for (let i = 0; i < myArray.length; i++) {
//   console.log("-------------------")
//   console.log(`This is the outer loop i number output:  ${myArray[i]}`);

//   for (let j = 0; j < yourArray.length; j++) {
//     console.log(`This is the inner loop j number output:  ${yourArray[j]}`);
//     if (myArray[i] === yourArray[j]) {
//       console.log('Both loops have the number: ' + yourArray[j])
//     }


//   }

// }



//nested loops with nested arrays(2d arrays)
// nestedArrays = [["Country: Australia", "City: Sydney", "Language: English"], ["Country: China", "City: Beijing", "Language: Chinese"], ["Country: America", "City: New York", "Language: English"], ["Country: Canada", "City: Toronto", "Language: English"]]

// for (let a = 0; a < nestedArrays.length; a++) {
//   if (a > 0) {
//     console.log("*****************")
//   }
//   // nestedArray[a].length is nested array length,which is 3
//   for (let k = 0; k < nestedArrays[a].length; k++) {
//     console.log(nestedArrays[a][k]) // a and k is both array nested index for example: nestedArray[0][0]: output will be: Country: Australia 4 times
//   }

// }


/* Whale Talk project
https://www.codecademy.com/courses/introduction-to-javascript/projects/whale-talk

*/
let input = "turpentine";
const vowels = ["a", "e", "i", "o", "u"];
const resultArray = [];

for (let i = 0; i < input.length; i++) {
  //console.log('i is ' + i);
  // double letter e and u 
  if (input[i] === "e" || input[i] === "u") {
    resultArray.push(input[i])
  }
  else {

  }
  for (let j = 0; j < vowels.length; j++) {
    //console.log('j is ' + j);
    if (input[i] === vowels[j]) //Remember that stringName[i] works just like accessing an element within an array. That’s because JavaScript internally stores every character in a string at a numbered position.
      //console.log(input[i])
      resultArray.push(input[i])
  }

}
console.log(resultArray)

// join as a string
const resultString = resultArray.join('').toUpperCase()
console.log(resultString)




//do ...while loop
let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);

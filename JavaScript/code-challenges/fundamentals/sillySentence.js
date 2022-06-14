/* Write a function, sillySentence(), that has 3 string parameters and returns the following silly sentence with the blanks filled in by the arguments passed into the function:


sillySentence('excited', 'love', 'functions');
// Should return 'I am so excited because I love coding! Time to write some more awesome functions!'

*/


const sillySentence = (adj, ver, noun) => {
  return `I am so ${adj} because I ${ver} coding! Time to write some more awesome ${noun}!`;

}



// Uncomment the line below when you're ready to try out your function
console.log(sillySentence('excited', 'love', 'functions')) 

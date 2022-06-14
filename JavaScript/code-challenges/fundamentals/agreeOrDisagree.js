/* Write a function, agreeOrDisagree(), that takes in two strings, and returns 'You agree!' if the two strings are the same and 'You disagree!' if the two strings are different. */


function agreeOrDisagree(strA, strB) {
  if (strA === strB) {
    return "You agree!";
  } else {
    return "You disagree!"
  }

}


// Uncomment the line below when you're ready to try out your function
console.log(agreeOrDisagree("yep", "yep"))
// Should print 'You agree!'
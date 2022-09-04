/* Fill in the urlSlug function so it
 converts a string title and returns the 
 hyphenated version for the URL
 
1.The input is a string with 
 spaces and title-cased words

2.The output is a string with the 
spaces between words replaced by a hyphen (-)

3.The output should be all lower-cased letters

4. The output should not have any spaces
 Example:
 Waiting:urlSlug("Winter Is Coming")
 return the string winter-is-coming
 */

function urlSlug(title) { 
  //get lower case array
  let arr = title.trim().toLowerCase().split(" ")
  //filter the spcaes out
  return arr.filter(item=> item !=="").join("-")
    
}

console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));
console.log(urlSlug("Winter Is Coming"));
console.log(urlSlug(" Winter Is  Coming"))


let title = " Winter Is  Coming"

//console.log(title.split(" "))
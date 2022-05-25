let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';
//console.log(storyWords)

let storyWordsString = storyWords.join(' ');
//console.log(storyWordsString)

// use forEach to count how much word in the story.
let count = 0;
storyWords.forEach((word) => {
  return count++
})
console.log(count)


//Filtering Words use filter
storyWords = storyWords.filter((word) => {
  //return word === "literally"
  return word !== unnecessaryWord //  word is NOT equal to unnecessaryWord.
})
//console.log(storyWords)


//Replacing Words
storyWords = storyWords.map((word) => {
  return word === misspelledWord ? "beautiful" : word;
})


//the .findIndex() method to storyWords to find the index of the "bad" word.
const badWordIndex = storyWords.findIndex(word => {
  return word === badWord;
})
console.log(badWordIndex) // return index of badWord 
console.log(storyWords[badWordIndex]) // to check index 


//replace badword to "really"
storyWords[badWordIndex] = "really"
//console.log(storyWords)


//The .every() method uses a callback function to test if every element in an array passes a specified condition. It returns true if all elements pass, and false if there is an element that does not pass
const lengthCheck = storyWords.every(word => {
  return word.length < 10; // return false , not all the words are less than 10
})
console.log(lengthCheck)


//find storyWords array that is greater than 10 characters and replace it  manually
storyWords.filter(word => {
  return word.length > 10 && console.log(word)
})

console.log(storyWords.join(','))


// The global variable
const watchList = [
  {
    "Title": "Inception",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "Director": "Christopher Nolan",
  },
  {
    "Title": "Interstellar",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "Director": "Christopher Nolan",
    
  },
  {
    "Title": "The Dark Knight",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "Director": "Christopher Nolan",
    
  },
  {
    "Title": "Batman Begins",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "Director": "Christopher Nolan",
  },
  {
    "Title": "Avatar",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "Director": "James Cameron",
  }
];

// find the average IMDB rating of the movies 
//directed by Christopher Nolan
//average rating should equal 8.675.
function getRating(watchList) {
  // Only change code below this line
  let averageRating;
  let NewArr = watchList.filter((item) => item.Director === "Christopher Nolan")
  let sum = NewArr.reduce((preValue, currValue) => preValue + parseFloat(currValue.imdbRating), 0)
  averageRating = sum / (NewArr.length)
  // Only change code above this line
  return averageRating;
}


console.log(getRating(watchList));



//another solution
function getRating2(watchList) {
  // Add your code below this line
  const nolanData = watchList
    .reduce((data, { Director: director, imdbRating: rating }) => {
      if (director === 'Christopher Nolan') {
        data.count++;
        data.sum += Number(rating);
      }
      return data;
    }, { sum: 0, count: 0 });
  const averageRating = nolanData.sum / nolanData.count;
  // Add your code above this line
  return averageRating;
}

console.log(getRating2(watchList));







//how an object can be returned containing the names of the users as properties with their ages as values.
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const usersObj = users.reduce((obj, user) => {
  //user is each item in the array
  //console.log(user)
  console.log(obj) //initial object
  obj[user.name] = user.age;
  return obj;
}, {});// return an object
console.log(usersObj);
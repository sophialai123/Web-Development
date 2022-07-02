
/* San Francisco sorted by age as well as seeing all players in San Francisco who play handball. */

//The function filters the array of objects by the city key, then sorts by the sort criteria.
const players = [
  { age: 5, sport: "soccer", city: "Chicago", dateJoined: new Date('2021-01-20') },
  { age: 6, sport: "baseball", city: "Boulder", dateJoined: new Date('2019-12-30') },
  { age: 10, sport: "soccer", city: "Chicago", dateJoined: new Date('2020-11-12') },
  { age: 11, sport: "handball", city: "San Francisco", dateJoined: new Date('2020-08-21') },
  { age: 6, sport: "soccer", city: "Chicago", dateJoined: new Date('2021-07-06') },
  { age: 8, sport: "softball", city: "Boulder", dateJoined: new Date('2019-02-27') },
  { age: 7, sport: "tennis", city: "San Francisco", dateJoined: new Date('2019-05-31') },
  { age: 4, sport: "handball", city: "San Francisco", dateJoined: new Date('2018-03-10') }
]

const sortPlayersByValueFromCity = (playersArr, city, sortKey) => {
  return playersArr.filter(player => {
    return player.city === city;
  }).sort((a, b) => {
    return a[sortKey] - b[sortKey]
  });
}

//console.log(sortPlayersByValueFromCity(players, "San Francisco", "age"));




//The function filters by the city then filters the results by the key-value pair.

const filterPlayersByValueFromCity = (playersArr, city, filterKey, filterValue) => {
  return playersArr.filter(player => {
    return player.city === city;
  }).filter(playersFromCity => playersFromCity[filterKey] === filterValue)
}

//console.log(filterPlayersByValueFromCity(players, "San Francisco", "sport", "handball"));




/* Let’s make the code more modular with currying (closure) to eliminate potential problems in the code and to avoid repeating the repetitive filter operations. */
const setFilter = array => key => value => array.filter(x => x[key] === value);
const filterPlayers = setFilter(players);
const filterPlayersByCity = filterPlayers('city');
const filteredPlayersBySanFrancisco = filterPlayersByCity('San Francisco');
const filterPlayersBySport = filterPlayers('sport');
const filteredPlayersBySoccer = filterPlayersBySport('soccer');

//console.log(filteredPlayersBySanFrancisco); // Returns an array of players from San Francisco
//console.log(filteredPlayersBySoccer); // Returns an array of players that play soccer




/* Now we can reuse the filtered San Francisco object for additional specialized functions. Let’s use it to sort the players by the date they joined the sports league. */

const sortArrayByValue = sortArray => sortKey => {
  return sortArray.sort(function (a, b) {
    if (a[sortKey] < b[sortKey]) { return -1; }
    if (a[sortKey] > b[sortKey]) { return 1; }
    return 0;
  });
}

const sortSanFrancisco = sortArrayByValue(filteredPlayersBySanFrancisco);
const sortSFByDateJoined = sortSanFrancisco("dateJoined");
console.log(sortSFByDateJoined);

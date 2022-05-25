/* We want to create, retrieve, and add information about your favorite sports team. 
Basketball, soccer, tennis, or water polo, you pick it. 
It’s your job to create data using the JavaScript data structures at your disposal: arrays and objects. */

const team = {

  //privacy 
  _players: [{ firstName: 'Pete', lastName: 'Wheeler', age: 24 },
  { firstName: 'Stevev', lastName: 'Yuan', age: 30 },
  { firstName: 'John', lastName: 'Wheeler', age: 28 }],
  _games: [
    { opponent: "Jets", teamPoints: 20, opponentPoints: 29 },
    { opponent: "Giants", teamPoints: 30, opponentPoints: 23 },
    { opponent: " Eagels", teamPoints: 25, opponentPoints: 30 },
  ],

  //Create a getter method to get data from _players
  get players() {
    return this._players;
  },

  //Create a getter method and return the _games property.
  get games() {
    return this._games;
  },

  //Add .addPlayer() method to the team object
  addPlayer(newFirstName, newLastName, newAge) {

    //create a local player object by setting parameters
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    };

    //add(push) the player object to team's array
    this.players.push(player)
  },


  //create a new method
  addGame(newOpponent, newTeamPoints, newOpponentPionts) {

    //create a local object
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPionts
    }

    //push game object to team's_games array
    this.games.push(game)

  }
};


//use the .players() getter method to check if the new player was added
team.addPlayer("Bugs", "Bunny", 76.)
console.log(team.players)


team.addGame("Titans", 100, 98)
console.log(team.games)
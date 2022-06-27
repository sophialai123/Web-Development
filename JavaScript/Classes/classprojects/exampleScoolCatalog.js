class SchoolCatalog {
  constructor() {
    this._list = [];
  }
  get list() {
    return this._list;
  }
  addSchool(school) {
    this._list.push(school);
  }
  quickFacts(x) {
    const teams = (x.sportsTeams ? `Intramural sports programs ${x.sportsTeams}` : '');
    console.log(`${x.name} educates ${x.numberOfStudents} ${x.level} school students. ${teams}`);
  }
  print() {
    this._list.forEach(this.quickFacts);
  }
}
class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }

  set numberOfStudents(value) {
    if (value.isNaN) {
      console.log('Invalid input: numberOfStudents must be set to a number.');
    }
    else { this._numberOfStudents = value; }
  }

  quickFacts() {
    console.log(`${this.name} educates ${this.numberOfStudents} students of the ${this.level} school level.`);
  }

  static pickSubstituteTeacher(substituteTeachers) {
    const randomIndex = Math.floor(Math.random() * substituteTeachers.length);
    console.log(substituteTeachers[randomIndex]);
  }
}

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;

  }
  get pickupPolicy() {
    return this._pickupPolicy;
  }

}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, 'high', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams() {
    return this._sportsTeams;
  }
}

/*
School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
*/

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

const anHenday = new HighSchool(
  'Anthony Henday',
  515,
  ['Baseball', 'Basketball', 'Volleyball', 'Track and Field', 'Hockey']
);
const salisbury = new HighSchool(
  'Salisbury',
  315,
  ['Baseball', 'Basketball', 'Volleyball', 'Track and Field', 'Hockey']
);


let primary = new SchoolCatalog();
let middle = new SchoolCatalog();
let high = new SchoolCatalog();

high.addSchool(alSmith);
high.addSchool(anHenday);
high.addSchool(salisbury);
/*
high.quickFacts(alSmith);
high.quickFacts(anHenday);
high.quickFacts(salisbury);
*/
high.print();

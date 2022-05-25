/* Your function takes two arguments:
current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
 */

function twiceAsOld(dadYearsOld, sonYearsOld) {
  // your code here
  if (dadYearsOld - (sonYearsOld * 2) > 0) {
    return dadYearsOld - (sonYearsOld * 2)
  } else {
    return (sonYearsOld * 2) - dadYearsOld
  }

}

console.log((twiceAsOld(36, 7), 22))
console.log((twiceAsOld(55, 30), 5));

console.log((twiceAsOld(42, 21), 0));
console.log((twiceAsOld(22, 1), 20));


//another solution
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

console.log((twiceAsOld(36, 7), 22))
console.log((twiceAsOld(55, 30), 5));

console.log((twiceAsOld(42, 21), 0));
console.log((twiceAsOld(22, 1), 20));

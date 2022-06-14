/* Write a function, howOld(), that has two number parameters, age and year, and returns how old someone who is currently that age was (or will be) during that year. Handle three different cases:

If the year is in the future, you should return a string in the following format:

'You will be [calculated age] in the year [year passed in]'
If the year is before they were born, you should return a string in the following format:

'The year [year passed in] was [calculated number of years] years before you were born'
If the year is in the past but not before the person was born, you should return a string in the following format:

'You were [calculated age] in the year [year passed in]' */


const howOld = (age, year) => {

  //to get current year
  const date = new Date()
  let currentYear = date.getFullYear();

  const yearDiff = year - currentYear;

  console.log(yearDiff);
  const newAge = age + yearDiff;
  console.log(newAge);



  //If the newAge is less than 0, this means the year provided was before the person was born. If the newAge is greater than their current age, this means the year passed in is in the future. Otherwise, we know the year provided was in the past but not before they were born.

  if (newAge < 0) {
    return `The year ${year} was ${-newAge} years before you were born.`
  } else if (newAge > age) {
    return `You will be ${newAge} in the year ${year}.`;
  } else {
    return `You were ${newAge} in the year ${year}.`;
  }
}


console.log(howOld(33, 2012));

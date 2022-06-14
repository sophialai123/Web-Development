/* Though an object’s mass remains consistent throughout the universe, weight is determined by the force of gravity on an object. Since different planets have different gravity, the same object would weigh different amounts on each of those planets! Cool, huh?

Write a function, calculateWeight(). It should:

have two parameters: earthWeight and planet
expect earthWeight to be a number
expect planet to be a string
return a number representing what that Earth-weight would equate to on the planet passed in.
Handle the following cases:
'Mercury' weight = earthWeight * 0.378
'Venus' weight = earthWeight * 0.907
'Mars' weight = earthWeight * 0.377
'Jupiter' weight = earthWeight * 2.36
'Saturn' weight = earthWeight * 0.916
For all other inputs, return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.' */

const calculateWeight = (earthWeight, planet) => {

  switch (planet) {
    case 'Mercury':
      return earthWeight * 0.378;
      break;
    case 'Venus':
      return earthWeight * 0.907;
      break;
    case 'Mars':
      return earthWeight * 0.377;
    case 'Jupiter':
      return earthWeight * 2.36;
      break;
    case 'Saturn':
      return earthWeight * 0.916;
    default:
      return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';
      break;
  }

}


console.log(calculateWeight(100, 'Jupiter')) // Should print 236
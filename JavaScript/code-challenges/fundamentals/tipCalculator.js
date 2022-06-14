/* Create a function, tipCalculator(), that has two parameters, a string representing the quality of the service received and a number representing the total cost.

Return the tip, as a number, based on the following:
‘bad’ should return a 5% tip
‘ok’ should return a 15% tip
‘good’ should return a 20% tip
‘excellent’ should return a 30% tip
all other inputs should default to 18%

tipCalculator('good', 100) // Should return 20 */


const tipCalculator = (qualityService, totalCost) => {

  switch (qualityService) {
    case "bad":
      return (5 / totalCost) * 100; //(5/100)*100 = 5% tip
      break;
    case "ok":
      return (15 / totalCost) * 100;
      break;
    case "good":
      return (20 / totalCost) * 100;
      break;
    case "excellent":
      return (30 / totalCost) * 100;
      break;
    default:
      return (18 / totalCost) * 100;
      break;
  }

}


// Uncomment the line below when you're ready to try out your function
console.log(tipCalculator('good', 100)); //should return 20
console.log(tipCalculator('bad', 100));



// As a function declaration:
function tipCalculators(quality, total) {
  switch (quality) {
    case 'bad':
      return total * .05;
    case 'ok':
      return total * .15;
    case 'good':
      return total * .20;
    case 'excellent':
      return total * .30;
    default:
      return total * .18;

  }
}

console.log(tipCalculators("ok", 100));
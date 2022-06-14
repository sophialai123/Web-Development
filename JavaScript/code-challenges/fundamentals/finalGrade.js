/* Write a function, finalGrade(). It should:

1. take three arguments of type number
2. find the average of those three numbers
3. return the letter grade (as a string) that the average corresponds to
return ‘You have entered an invalid grade.’ if any of the three grades are less than 0 or greater than 100
0-59 should return: 'F'
60-69 should return: 'D'
70-79 should return: 'C'
80-89 should return: 'B'
90-100 should return: 'A' */


function finalGrade(num1, num2, num3) {

  //find the average of those three numbers
  averageNum = (num1 + num2 + num3) / 3


  /* if any of the three grades are less than 0 or greater than 100 */
  if ((num1 < 0 || num1 > 100) || (num2 < 0 || num2 > 100) || (num3 < 0 || num3 > 100)) {
    return "You have entered an invalid grade."
  } else if (averageNum >= 0 && averageNum <= 59) {
    return 'F';
  } else if (averageNum >= 60 && averageNum <= 69) {
    return "D";
  } else if (averageNum >= 70 && averageNum <= 79) {
    return "C";
  } else if (averageNum >= 80 && averageNum <= 89) {
    return "B";
  } else if (averageNum >= 90 && averageNum <= 100) {
    return "A";
  } else if (averageNum < 0 || averageNum < 100) {
    return "You have entered an invalid grade."
  }

};



console.log(finalGrade(99, 92, 95)) // Should print 'A'
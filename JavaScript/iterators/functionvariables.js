let plusFive = (number) => {
  return number + 5;
};
// f is assigned the value of plusFive
let f = plusFive;

console.log(plusFive(3)); // 8

// Since f has a function value, it can be invoked. 
console.log(f(9)); // 14 , f = plusFive(5) + 9




/*
you can write to stdout for debugging purposes, e.g.
console.log('this is a debug message');

n is an int with the range[1, 300,000]
s only consists only"a" and "b", or just "a" or just"b" return true;
"a" must before "b" return true, otherwise false;

all the index of "a" must less than "b"; return true;
*/

//This is typescript

/* 
let N = ['aabbb', 'aaa', 'baab', 'ba', 'bb', 'aab', 'abba', 'accc', 'abcd'];
const findIndex = (n: string[]): boolean[] => {
  let result: boolean[] = [];
  for (let s of n) {
    let lastAIndex = -1;
    let firstBIndex = s.length;
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== 'a' && s[i] !== 'b') {
        lastAIndex = s.length;
        firstBIndex = -1;
      }
      if (s[i] === 'a') {
        lastAIndex = i;
      }
    }
    for (let j = s.length - 1; j >= 0; j--) {
      if (s[j] === 'b') {
        firstBIndex = j;
      }
    }
    if (firstBIndex < lastAIndex) {
      result.push(false);
    } else {
      result.push(true);
    }
  }
  return result;
};

console.log(findIndex(N)); */



let N = ['abba', 'aabbb', 'aaa', 'baab', 'ba', 'bb', 'aab', 'accc', 'abba']

function solution(S) {
  let regex = /^a*b*$/g;

  let newArray = []
  S.map((s => s.match(regex) != null ? newArray.push(true) : newArray.push(false)))
  return newArray;
}
console.log(solution(N))

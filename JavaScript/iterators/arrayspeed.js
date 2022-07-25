// forEach, filter, map, reduce
const myArr = ["Chris", "Kiana", "Mei", "Bhuvana", "Elizabeth", "Anthony", "Sophia", "Edom"]

console.time("methods")
//forEach: a for loop for each element in an array
myArr.forEach((ele, i) => {
  console.log(ele)
})

function myFilterFunc(val, i) {
  if (val.length <= 5) {
    return true;
  } else {
    return false;
  }
}

//filter: RETURNS a new array of elements that match a condition
// const shortNames = myArr.filter(myFilterFunc)
// console.log(shortNames)
// console.log(myArr)

// map: RETURNS a new array of elements with logic applied
const bestStudents = myArr.map((val, i) => {
  const student = {
    name: val,
    grades: Math.round(Math.random() * 100)
  }
  return student
})

// reduce: RETURNS a single value reduced from the entire array
const firstTotal = bestStudents.reduce((prev, curr, i) => {
  return prev + curr.grades
}, 0)

let firstAvg = firstTotal / bestStudents.length
console.log(firstAvg)
console.timeEnd("methods")
// bestStudents.sort((a, b) => a.grades - b.grades)

let totalGrades = 0
let finalStuds = []

console.time("forloop")
//use for loop to do the same as map and reduce together,
//much faster
for (let i = 0; i < myArr.length; i++) {
  const currStud = myArr[i]
  const stud = {
    name: currStud,
    grade: Math.round(Math.random() * 100)
  }
  finalStuds.push(stud)
  totalGrades += stud.grade
}
console.timeEnd("forloop")
console.log(finalStuds)
console.log(totalGrades)
const average = totalGrades / finalStuds.length
console.log(average)


console.time("find for")
for (let i = 0; i < finalStuds.length; i++) {
  if (finalStuds[i].name === "Bhuvana") {
    break;
  }
}
console.timeEnd("find for")

console.time("indexOf")
myArr.indexOf("Bhuvana")
console.timeEnd("indexOf")

console.time("findindex")
finalStuds.findIndex((val, i) => {
  return val.name === "Bhuvana"
})
console.timeEnd("findindex")


console.time("find method")
finalStuds.find((val, i) => {
  return val.name === "Bhuvana"
})
console.timeEnd("find method")
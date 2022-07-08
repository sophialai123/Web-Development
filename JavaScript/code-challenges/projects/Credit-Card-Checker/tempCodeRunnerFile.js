  let validArray = mergedArray.reduce((a, b) => a + b) % 10 === 0 ? true : false;
  console.log(validArray)
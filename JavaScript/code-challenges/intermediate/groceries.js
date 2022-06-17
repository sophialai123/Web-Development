/* Write a function groceries() that takes an array of object literals of grocery items. The function should return a string with each item separated by a comma except the last two items should be separated by the word 'and'. Make sure spaces (' ') are inserted where they are appropriate.

Examples:

groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
// returns 'Carrots, Hummus, Pesto and Rigatoni'
 
groceries( [{item: 'Bread'}, {item: 'Butter'}] );
// returns 'Bread and Butter'
 
groceries( [{item: 'Cheese Balls'}] );
// returns 'Cheese Balls' */

const groceries = arr => {

  let newArr = [];
  //return all the item string
  arr.forEach((value) => newArr.push(value.item));

  //the last two items
  let lastTwoItems = newArr.slice(-2).join(" and ");
  if (newArr.length === 2) {
    return lastTwoItems
  } else if (newArr.length > 2) {
    //remove all the items before the last two items 
    newArr.splice((newArr.length - 2, (newArr.length - 2)));
    newArr.push(lastTwoItems);
    return newArr.join(" , ");
  }
  return newArr.join();
};

//Test all the code
console.log(groceries([{ item: 'Breads' }, { item: 'Butters' }, { item: 'Carrots' }, { item: 'Hummus' }, { item: 'Pestos' }, { item: 'Breads' }]));
console.log(groceries([{ item: 'Bread' }, { item: 'Butter' }]));
console.log(groceries([{ item: 'Carrots' }, { item: 'Hummus' }, { item: 'Pesto' }, { item: 'Rigatoni' }]));
console.log(groceries([{ item: 'Cheese Balls' }]))

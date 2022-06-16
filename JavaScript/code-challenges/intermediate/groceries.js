/* Write a function groceries() that takes an array of object literals of grocery items. The function should return a string with each item separated by a comma except the last two items should be separated by the word 'and'. Make sure spaces (' ') are inserted where they are appropriate.

Examples:

groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
// returns 'Carrots, Hummus, Pesto and Rigatoni'
 
groceries( [{item: 'Bread'}, {item: 'Butter'}] );
// returns 'Bread and Butter'
 
groceries( [{item: 'Cheese Balls'}] );
// returns 'Cheese Balls' */

const groceries = arr => {

  /* arr.forEach((value, index) => {

    //find the last item in the array
    const lastItem = arr[arr.length - 1].item
    //console.log(lastItem);

    // find the second last item in the arrar
    const secondLastItem = arr[arr.length - 2].item
    //console.log(secondLastItem)

    //console.log(value.item + );
    //console.log(`${value.item}`)
    if (value.item === secondLastItem) {
      console.log(value.item + "and" + ",")
    } else {
      console.log(value.item + ",");

    }

  }) */


  arr.forEach(element => {

    const Allitems = element.item


    //String#concat()
    const stringCancat = Allitems.concat(',')
    console.log(stringCancat)


    //console.log(Allitems.split(","))

  });






}


groceries([{ item: 'Carrots' }, { item: 'Hummus' }, { item: 'Pesto' }, { item: 'Rigatoni' }]);

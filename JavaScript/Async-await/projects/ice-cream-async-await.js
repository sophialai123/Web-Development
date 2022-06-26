// create a stock for ice creams
let stocks = {
  fruits: ['blueberry', 'banana', 'mix berry', 'apple'],
  liquid: ['water', 'ice'],
  holder: ['cone', 'cup', 'stick'],
  toppings: ['chocolate', 'peanuts']
}


let isShopOpen = false;


//Create a promise first
const time = (seconds) => {

  return new Promise((resolve, reject) => {

    if (isShopOpen) {

      //pass the resolve and time message if the shop is open
      setTimeout(resolve, seconds)

    } else {
      reject(console.log("Sorry, our shop is closed!"))
    }

  })

}

//use async await function
async function order() {

  //step 1 try statement with resolve value
  try {

    // 7 steps to complete the serve ice cream
    //use await keyword and call time function ()
    await time(2000);
    console.log(`Step 1: placed an order by selecting ${stocks.fruits[2]} after 2 seconds.`);

    await time(0);
    console.log("Step 2: production is starting now.");

    await time(2000);
    console.log(`Step 3: ${stocks.liquid[0]} and ${stocks.liquid[1]} were added into ice cream after 2 seconds.`);

    await time(1000);
    console.log("Step 4: started the machine after one second.");

    await time(2000);
    console.log(`Step 5: ice cream ${stocks.holder[0]} was selected after 2 seconds.`);

    await time(3000);
    console.log(`Step 6: ice cream ${stocks.toppings[1]} topping was selected after 3 seconds.`);

    await time(1000);
    console.log("Step 7: finally ice cream is ready to serve after one second.");


  }

  //step 2 catch error statement
  catch (error) {
    console.log("Customer has left", error);

  }

  //step 3 finally statement with runs both with try and catch statement
  finally {
    console.log('Finally statment will run with both try and catch statement.');
  }
}


//call order function
order()

  //can also call then()and catch here.
  .then(() => console.log('You can also pass then function after here too.'));
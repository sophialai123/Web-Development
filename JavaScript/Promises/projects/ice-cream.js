
// create a stock for ice creams
let stocks = {
  fruits: ['blueberry', 'banana', 'mix berry', 'apple'],
  liquid: ['water', 'ice'],
  holder: ['cone', 'cup', 'stick'],
  toppings: ['chocolate', 'peanuts']
}


let isShopOpen = true;

//relationship between time and work function
const order = (time, work) => {

  // return a promise 
  return new Promise((resolve, reject) => {
    if (isShopOpen) {

      // create settime out represent with time argument
      setTimeout(() => {

        //call resolve function
        resolve(work())
      }, time)


    } else {

      //call reject funtion
      reject(console.log('Our shop is closed'))
    }

  })


}

// 7 steps to complete the serve ice cream
//call the order function(pass time and work function) with resovle
order(2000, () => console.log(`Step 1: placed an order by selecting ${stocks.fruits[2]} after 2 seconds. `))


  //then with function and must return next order function
  .then(() => {
    return order(0, () => console.log("Step 2: production is starting now."))
  })
  .then(() => {
    return order(2000, () => console.log(`Step 3: ${stocks.liquid[0]} and ${stocks.liquid[1]} were added into ice cream after 2 seconds.`))
  })
  .then(() => {
    return order(1000, () => console.log("Step 4: started the machine after one second."))
  })
  .then(() => {
    return order(2000, () => console.log(`Step 5: ice cream ${stocks.holder[0]} was selected after 2 seconds `))
  })
  .then(() => {
    return order(3000, () => console.log(`Step 6: ice cream ${stocks.toppings[1]} topping was selected after 3 seconds.`))
  })
  .then(() => {
    return order(1000, () => console.log("Step 7: finally ice cream is ready to serve after one second."))
  })

  //return catch function if the shop is closedn which is reject function.
  .catch(() => console.log("No customers are in the shop."))


  //finally handler
  .finally(() => console.log("This finally handler will run both with resolve and reject functions."))

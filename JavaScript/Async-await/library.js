/*
This is the shopForBeans function 
*/

const shopForBeans = () => {
  return new Promise((resolve, reject) => {
    const beanTypes = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];
    setTimeout(() => {
      let randomIndex = Math.floor(Math.random() * 5);
      let beanType = beanTypes[randomIndex];
      console.log(`I bought ${beanType} beans because they were on sale.`);
      resolve(beanType);//pass resolve value
    }, 1000)
  })
}

let soakTheBeans = (beanType) => {
  return new Promise((resolve, reject) => {
    console.log('Time to soak the beans.');
    setTimeout(() => {
      console.log(`... The ${beanType} beans are softened.`);
      resolve(true);
    }, 1000);
  });
}

let cookTheBeans = (isSoftened) => {
  return new Promise((resolve, reject) => {
    console.log('Time to cook the beans.');
    setTimeout(() => {
      if (isSoftened) {

        //use spread operator
        console.log('... The beans are cooked!');
        resolve('\n\nDinner is served!');//return in the newlines
      }
    }, 1000);
  });
}

/* Handling Errors practice functions */

// This function returns true 50% of the time.
let randomSuccess = () => {
  let num = Math.random();
  if (num < .5) {
    return true;
  } else {
    return false;
  }
};



// This function returns a promise that resolves half of the time and rejects half of the time
let cookBeanSouffle = () => {
  return new Promise((resolve, reject) => {
    console.log('Fingers crossed... Putting the Bean Souffle in the oven');
    setTimeout(() => {
      let success = randomSuccess();
      if (success) {
        resolve('Bean Souffle');
      } else {
        reject('Dinner is ruined!');
      }
    }, 1000);
  });
};



/* Handling Independent Promises practice functions */

let cookBeans = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('beans');
    }, 1000);
  });
}

let steamBroccoli = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('broccoli');
    }, 1000);
  });
}

let cookRice = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('rice');
    }, 1000);
  });
}

let bakeChicken = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('chicken');
    }, 1000);
  });
}



export { shopForBeans, soakTheBeans, cookTheBeans, randomSuccess, cookBeanSouffle, cookBeans, steamBroccoli, cookRice, bakeChicken };
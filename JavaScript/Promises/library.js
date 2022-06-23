/* add a package.json file:
npm init -y */

const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};

const checkInventory = (order) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let inStock = order.every(item => inventory[item[0]] >= item[1]);
      if (inStock) {
        resolve(`Thank you. Your order was successful.`);
      } else {
        reject(`We're sorry. Your order could not be completed because some items are sold out.`);
      }
    }, 1000);
  })
};


const checkAvailability = (itemName, distributorName) => {
  console.log(`Checking availability of ${itemName} at ${distributorName}...`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (restockSuccess()) {
        console.log(`${itemName} are in stock at ${distributorName}`)
        resolve(itemName);
      } else {
        reject(`Error: ${itemName} is unavailable from ${distributorName} at this time.`);
      }
    }, 1000);
  });
};


// This is a function that returns true 80% of the time
// We're using it to simulate a request to the distributor being successful this often
function restockSuccess() {
  return (Math.random() > .2);
}


export { checkInventory, checkAvailability };
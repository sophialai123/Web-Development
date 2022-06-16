/* Write a function, findMyKeys(), that takes in an array of strings which may or may not contain 'keys'. If the keys are in the array, your function should return the index at which they can be found. If they’re not in the array, your function should return -1.

const drawer = ['rubber bands', 'tape', 'old menus', 'batteries'];
findMyKeys(drawer);

// Should return -1
You can use any technique you want to accomplish this task. Though, if you look, there’s a built-in method that will make pretty quick work of it. */



//findIndex() found index in the calling array, if an element in the array satisfies the testing function, or -1 if not found.

const findMyKeys = arr => arr.findIndex(key => key === "keys");




const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

console.log(findMyKeys(randomStuff))
// Should print 4
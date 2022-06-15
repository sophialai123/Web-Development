## The for...of Loop


#### for loop vs for…of loop

1. Here is an example of iterating over each element in an array using a traditional for loop with an index variable:
   
```
const hobbies = ['singing', 'eating', 'quidditch', 'writing'];

for( let 9 =0 ; i < hobbies.length; i++){
  console.log(`I enjoy ${hobbies[i]}.`);
}
```

2. And here is an example of iterating through the same array using a for...of loop:

```
const hobbies = ['singing', 'eating', 'quidditch', 'writing'];

//The variable may be declared with the keywords: const, let, or var.

for (const hobby of hobbies){
   console.log(`I enjoy ${hobbies[i]}.`);

}

```

#### Both examples print out the same thing:

```
I enjoy singing.
I enjoy eating.
I enjoy quidditch.
I enjoy writing.
```

***
#### Iterating Through a String

```
const username="joe";

for( const char of username){
  console.log(char);
};


// return
j
o
e

```
***

#### Break and Continue
1. The break statement can be used to jump out of a loop. For example:

```
const strangeBirds = ['Shoebill', 'Cockatrice', 'Basan', 'Terrorbird','Parotia','Kakapo'];

for (const bird of strangeBirds) {
  if (bird === "Basan") {
    break;
  }
   
  console.log(bird); // only return Shoebill and Cockatrice
}

```


2. The continue statement is used to skip one iteration of the loop.
   
```

const strangeBirds = ['Shoebill', 'Cockatrice', 'Basan', 'Cow', 'Terrorbird', 'Parotia', 'Kakapo'];

for (const bird of strangeBird) {
  if (bird === "Cow") {
    continue;
  }

// will skip the "Cow" and continue to loop through
  console.log(bird); 
  
}

```
***
#### Use Case: for loop vs for…of loop

-   for…of loop CONNOT iterated through an array in reverse! 
  
-   for loop can iterated through an array in reverse! 

```

const nums = [1, 2, 3];
 
for (let i = nums.length - 1; i >= 0; i--) {
  console.log(nums[i]);
}
 
console.log('Time is up!');

//return
3
2
1
Time is up! 

```

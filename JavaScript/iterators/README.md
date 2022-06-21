## Higher-order functions
#### Functions as Data
- JavaScript functions behave like any other data type in the language; we can assign functions to variables, and we can reassign them to new variables.
```
 const announceThatIAmDoingImportantWork = () => {
    console.log("I’m doing very important work!");
};
```
- Let’s pretend this function does important work and needs to be called repeatedly. To rename this function without sacrificing the source code, we can re-assign the function to a variable with a suitably short name:
```
 const busy = announceThatIAmDoingImportantWork;
 
busy(); // This function call barely takes any space!
```
- busy is a variable that holds a reference to our original function. If we could look up the address in memory of busy and the address in memory of announceThatIAmDoingImportantWork they would point to the same place. 
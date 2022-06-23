## The Node Runtime Environment
- Node is an entirely different runtime environment, meaning that browser-environment data values and functions, like window.alert(), can’t be used. 
  
- Instead, the Node runtime environment gives back-end applications access to a variety of features unavailable in a browser, such as access to the server’s file system, database, and network.
  
- For example, suppose you created a file called my-app.js. We can check to see the directory that this file is located in using the Node runtime environment variable process:
```
 // my-app.js
 console.log(process.env.PWD);
```

- process is an object containing data relating to the JavaScript file being executed. 
  
- process.env is an object containing environment variables such as process.env.PWD which contains the current working directory (and stands for “Print Working Directory”).
  
- To execute the JavaScript code in this file, first make sure that you have set up Node on your computer. Then, open up a terminal and run the following command:
```
 $ node my-app.js
 /path/to/working/directory
```

- The node command tells your computer to execute the my-app.js file in the Node environment. You can also use the node command without a file argument to open up the Node Read-Eval-Print-Loop (REPL):
```
 $ node
 > process.env.HOME
 '/home/ccuser'
```
---
## Implementing Modules in Node
- Modules are reusable pieces of code in a file that can be exported and then imported for use in another file.

-  In JavaScript, there are two runtime environments and each has a preferred module implementation:

1. The Node runtime environment and the module.exports and require() syntax.
   
2. The browser’s runtime environment and the ES6 import/export syntax.
---

## module.exports
- module.exports is an object that is built-in to the Node.js runtime environment.
  
-  Other files can now import this object, and make use of these two functions, with another feature that is built-in to the Node.js runtime environment: the require() function.

- The [require()](https://www.freecodecamp.org/news/requiring-modules-in-node-js-everything-you-need-to-know-e7fbd119be8/) function accepts a string as an argument. That string provides the file path to the module you would like to import.
  
- Using [Object Destructuring](https://www.codecademy.com/courses/learn-intermediate-javascript/articles/implementing-modules-in-node) to be more Selective With require()
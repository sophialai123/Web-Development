### How to run typescript in vscode :
##### Run commands in terminal: 
1. Install typscript and node js
2. Create a new project run command in terminal `npm init` will create a new `package.json` file
2. Create a `src` folder for typescript files  
3. Create a typescript complier `tsc --init --sourceMap --rootDir src --outDir dist`
4. Create typescript dependency `npm i --save-dev typescript` will add this in the `package.json 
5. `dist` folder will be created by automatically 
6. search for `> tasks: Configure Default Build Task` in the search bar
7. select `tsc: watch - tsconfig.json`
8. search `>tasks: Run Build Task` --> this is will watch the all the changes 


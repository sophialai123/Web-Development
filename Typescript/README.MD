## How to run typescript in vscode ([youtube](https://www.youtube.com/watch?v=4zdBk6wisxc)): 

### Run commands in terminal: 
1. Install typscript `npm install --global typescript` and node js
2. Create a new project run command in terminal `npm init -y` will create a new `package.json` file
2. Create a `src` folder for typescript files  
3. Create a typescript complier `tsc --init --sourceMap --rootDir src --outDir dist`
4. Create typescript dependency `npm i --save-dev typescript` will add this in the `package.json 
5. `dist` folder will be created by automatically 
6. search for `> tasks: Configure Default Build Task` in the search bar
7. select `tsc: watch - tsconfig.json`
8. search `>tasks: Run Build Task` --> this is will watch the all the changes 

---

#### Connecting Typescript to Database
1. Set Up Your TypeScript Project：
    1. Create a new directory for your TypeScript project: `mkdir my-ts-sql-project` and  `cd my-ts-sql-project`

    2. Initialise your project by running: `npm init -y`

2. Install Dependencies: Install the mssql library, which is a Microsoft SQL Server client for Node.js: `npm install mssql`

3. Create a new TypeScript file named `app.ts` in your project directory.
4. Open the app.ts file and write the TypeScript code to connect to SQL Server and perform queries. Here's a basic example:

```

import * as sql from 'mssql';

 

// SQL Server configuration

const config: sql.config = {

  user: 'your_username',

  password: 'your_password',

  server: 'your_server',

  database: 'your_database',

  options: {

       trustServerCertificate: true, // Only for development purposes

  },

};

 

async function main() {

  try {

    // Create a connection pool

    const pool = await sql.connect(config);

 

    // Query database

    const result = await pool.request().query('SELECT * FROM YourTable');

 

    // Log the result

       console.log(result.recordset);

 

    // Close the connection pool

    await pool.close();

  } catch (error) {

    console.error('Error:', error);

  }

}

main();

```

5. Compile the TypeScript file using the TypeScript compiler (tsc): `npx tsc app.ts`
6. Run the compiled JavaScript file using Node.js: `node app.js`
7. [Use TypeScript to Build a Node API with Express](https://developer.okta.com/blog/2018/11/15/node-express-typescript)

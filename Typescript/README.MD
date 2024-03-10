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


---
### References
1. [geeksforgeeks.org (n.d.) Types of NoSQL Databases. Available at:](https://www.geeksforgeeks.org/types-of-nosql-databases/)

2. [indeed.com (2023) What Are the Different Types of Databases? Available at:](https://www.indeed.com/career-advice/career-development/types-of-databases)

3. [geeksforgeeks.org (n.d.) Types of Databases. Available at:](https://www.geeksforgeeks.org/types-of-databases/)

4. [mongodb.com (n.d.) Types of Databases. Available at:](https://www.mongodb.com/databases/types)

5. [techTFQ  (2020) Learn What is Database | Types of Database | DBMS. Available at:](https://www.youtube.com/watch?v=j09EQ-xlh88)

6. [ByteByteGo  (2022) How To Choose The Right Database? Available at:](https://www.youtube.com/watch?v=kkeFE6iRfMM)

7. [SQL Server 101 (2022) Want to know how to install SQL Server Express 2022? Available at:](https://www.youtube.com/watch?v=PBG40wvhiG0)

8. [neovera.com (2023) What Is SQL Server Express and Why Would You Use It. Available at:](https://neovera.com/sql-server-express-use/)

9. [Colt Steele (2022) How To Use TypeScript With Express & Node. Available at:](https://www.youtube.com/watch?v=qy8PxD3alWw)
10. [Use TypeScript to Build a Node API with Express](https://developer.okta.com/blog/2018/11/15/node-express-typescript)

11.[SQL Playground:](https://www.db-fiddle.com/)
12. [TypeScript Playground:](https://www.typescriptlang.org/play?#code/PTAEHUFMBsGMHsC2lQBd5oBYoCoE8AHSAZVgCcBLA1UABWgEM8BzM+AVwDsATAGiwoBnUENANQAd0gAjQRVSQAUCEmYKsTKGYUAbpGF4OY0BoadYKdJMoL+gzAzIoz3UNEiPOofEVKVqAHSKymAAmkYI7NCuqGqcANag8ABmIjQUXrFOKBJMggBcISGgoAC0oACCbvCwDKgU8JkY7p7ehCTkVDQS2E6gnPCxGcwmZqDSTgzxxWWVoASMFmgYkAAeRJTInN3ymj4d-jSCeNsMq-wuoPaOltigAKoASgAywhK7SbGQZIIz5VWCFzSeCrZagNYbChbHaxUDcCjJZLfSDbExIAgUdxkUBIursJzCFJtXydajBBCcQQ0MwAUVWDEQC0gADVHBQGNJ3KAALygABEAAkYNAMOB4GRonzFBTBPB3AERcwABS0+mM9ysygc9wASmCKhwzQ8ZC8iHFzmB7BoXzcZmY7AYzEg-Fg0HUiQ58D0Ii8fLpDKZgj5SWxfPADlQAHJhAA5SASPlBFQAeS+ZHegmdWkgR1QjgUrmkeFATjNOmGWH0KAQiGhwkuNok4uiIgMHGxCyYrA4PCCJSAA)

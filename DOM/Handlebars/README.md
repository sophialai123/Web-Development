## [Implementing Handlebars Library](https://sabe.io/tutorials/getting-started-with-handlebars-js)
#### The major steps of using Handlebars in a project:

1. Add the Handlebars library to your project. — one option is to use a Content Delivery Network (CDN): MDN CDN documentation.
2. Create a Handlebars script in your HTML file.
3. In your JavaScript file, grab the HTML stored in the Handlebars script.
4. Use Handlebars.compile() to return a templating function.
5. Pass in a context object to the templating function to get a compiled template.
6. Render the compiled template onto the web page.
---

## Using Handlebars expressions
- The power of Handlebars lies in its reusability and extensibility. Handlebars expressions allow us to accomplish this.
  
- Inside a script, Handlebar expressions are wrapped with double braces, {{ }}. The content inside the curly braces serves as a placeholder.
```
   <script id="foo" type="text/x-handlebars-template">
    <p>{{bar}}</p>
  </script>
```
- And our JavaScript file looks like:
```
 const source = document.getElementById('foo').innerHTML;
 
 const template = Handlebars.compile(source);
 
 const context = {
  bar: 'Text of the paragraph element'
 };
 
 const compiledHtml = template(context);
```
- After running our code, the expression, {{bar}} is replaced with the value of context.bar in our JavaScript file. In other words, compiledHtml will contain a string of 'Text of the paragraph element'.
---

## Handlebars "If" block helper
- Handlebars provides you with the {{if}} helper block. The {{if}} helper is similar to the if conditional in JavaScript, but there is a difference in syntax:
```
 {{#if argument}}
   // Code to include if the provided argument is truthy 
 {{/if}}
```
- Notice that the example above has both an opening {{#if}} expression and a closing {{/if}} expression. The code block between those expressions will be added to the final HTML template if the argument provided is truthy.
  
---
## Handlebars "Else" section
- You can add a default line of code by creating an else section, using Handlebar’s {{else}} expression.
```
 {{#if argument}}
  // Code to include if the provided argument is truthy 
 {{else}}
  // Code to include if the provided argument is falsy 
 {{/if}}
```
---
## Handlebars "Each" and "This" - Part I
- Another helper that Handlebars offers is the {{each}} block which allows you to iterate through an array.
  
- Just like the {{if}} block, there is an opening {{#each}} expression and closing {{/each}} expression. Inside the {{each}} block, {{this}} acts as a placeholder for the element in the iteration.
```
 {{#each someArray}}
   <p>{{this}} is the current element!</p>
 {{/each}}
```
- This {{each}} block would be paired with an array like:
```
 const context = {
   someArray: ['First', 'Second', 'Third'] 
 }
```
- After compiling, the HTML will look like:
```
 <p>First is the current element!</p>
 <p>Second is the current element!</p>
 <p>Third is the current element!</p>
```
---

## Handlebars "Each" and "This" - Part II
- Using {{this}} also gives you access to the properties of the element being iterated over.
  
```
 const context = {
   someArray: [
    {shape: 'Triangle'},
    {shape: 'Circle'},
    {shape: 'Square'}
   ] 
 }
```
- And your template looks like:
```
 {{#each someArray}}
   <p>The current shape is: {{this.shape}}!</p>
 {{/each}}
```
- After going through the steps of compiling, the finished HTML will look like:
```
 <p>The current shape is: Triangle!</p>
 <p>The current shape is: Circle!</p>
 <p>The current shape is: Square!</p>
```
---
## Combining "If" and "Each"
- You can combine the {{if}} block and the {{each}} block together in a single script!
  
---
## **Review**
- Handlebars is an external library used to create templates which are a mix of HTML, text, and expressions.
  
- Handlebars uses expressions which are wrapped inside double braces like: {{someVariable}}
A script tag with a type of "text/x-handlebars-template" is used to deliver a template to the browser.

- Handlebar.compile() returns a templating function from a template script intended for Handlebars.
  
- A template created from .compile() will take an object as an argument and use it as context to generate a string containing HTML.
  
- Handlebars has built in block helpers which can be included in a Handlebars script.
  
- Block helpers have a starting expression and an ending expression. The starting expression will have a # appears before a keyword. The ending expression will have the same keyword but with a / character to denote the end.
  
- The {{if}} will conditionally render a block of code.
  
- An {{else}} expression can be inserted into an if helper block and used as part of the conditional statement.

- {{each}} is another built-in helper expression which accepts an array to iterate through.
  
- In the block helper functions, the {{this}} expression gives context and serves as a placeholder for the current value.
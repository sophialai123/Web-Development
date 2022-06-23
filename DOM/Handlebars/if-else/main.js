

//Access document.getElementById('id-name').innerHTML and assign it to a const variable source.
const source = document.getElementById('ifHelper').innerHTML;

//template is a function that when passed an object returns a completed/compiled template in a string.
const template = Handlebars.compile(source);

//create context with an object
const context = {
  opinion: true
}


//replace the Handlebars expressions with the values in context, call template() with an argument of context and save the value to a const variable compiledHtml
const compiledHtml = template(context);



const debateElement = document.getElementById('debate');

//assign debateElement‘s .innerHTML property the value of compiledHtml.
debateElement.innerHTML = compiledHtml;
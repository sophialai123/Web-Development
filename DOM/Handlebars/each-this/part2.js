const source = document.getElementById('languagesTemp').innerHTML;
const template = Handlebars.compile(source);

const context = {
  languages: [
    {
      name: 'HTML',
      modern: true
    },
    {
      name: 'CSS',
      modern: true
    },
    {
      name: 'JavaScript',
      modern: true
    },
    {
      name: 'COBOL',
      modern: false

    }
  ]

};

const compiledHtml = template(context);

const displayGoals = document.getElementById('goals');
displayGoals.innerHTML = compiledHtml;

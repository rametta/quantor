const fs = require('fs')
const { render } = require('mustache')

const data = {title: 'Docs title'}

const html = (data) => {
  fs.readFile('src/index.mustache', (err, template) => {
    if (err) throw err;
    const output = render(template.toString(), data);
    console.log(output)
  });
}

html(data)
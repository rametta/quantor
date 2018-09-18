const fs = require('fs')
const { render } = require('mustache')

const data = {title: 'Docs title'}

const quantor = (data) => {
  fs.readFile('src/index.mustache', (err, template) => {
    if (err) throw err;
    const output = render(template.toString(), data);
    console.log(output)
  });
}

quantor(data)

module.exports = quantor
const fs = require('fs')
const quantor = require('./index')
const json = require('./../sample.json')

quantor(json)(html => fs.writeFile('build/index.html', html, err => {
  if (err) throw err
  console.log('Rendered Successfully')
}))

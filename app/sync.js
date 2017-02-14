
const fs = require('fs')
// let content

exports.readFileSync = function readFileSync () {
  try {
    return fs.readFileSync('file.md', 'utf-8')
  } catch (ex) {
    console.log(ex)
  }
}

// console.log(content)

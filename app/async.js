// app\async.js

const fs = require('fs')

exports.readFileAsync = function readFileAsync (file) {
  // return new Promise((resolve, reject) => {
  //   fs.readFile(file, 'utf-8', (err, data) => {
  //     if (err) {
  //       return reject(err)
  //     }
  //     resolve(data)
  //   })

  let p = new Promise((resolve, reject) => {
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) {
        return reject(err)
      }

      console.log('reading file...\n')
      resolve(data)
    })
  })

  p.then((data) => {
    console.log(`${data}\nend of file`)
  })
  .catch((err) => console.log(err))

  // fs.readFile('file.md', 'utf-8', function (err, content) {
  //   if(err) {
  //     console.log('error happened while reading the file')
  //     return console.log(err)
  //   }
  //
  //   console.log(content)
  // })

  // console.log('end of file')
}

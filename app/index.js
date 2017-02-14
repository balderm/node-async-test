// app\index.js

const async = require('./async.js')
const sync = require('./sync.js')

// let content = sync.readFileSync()
// console.log(content)

// Promise.all([async.readFileAsync('file.md')])
//        .then((data) => {
//          console.log(`${data}\nend of file`)
//        })
//        .catch((err) => console.log(err) )

async.readFileAsync('file.md')

const {MongoClient} = require('mongodb')

let dbConnection
let url = 'mongodb://localhost:27017'

// module.exports = {
//   connectToDb: (cb) => {
//     MongoClient.connect(url).then((client) => {
//       dbConnection = client.db('mydb')
//       return cb()
//     }).catch(err => {
//       console.log("err",err)
//       return cb(err)
//     })
//   },
//   getDb: () => { dbConnection }
// }


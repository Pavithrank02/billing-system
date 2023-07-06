const {MongoClient} = require('mongodb')

let dbConnection
let url = 'mongodb+srv://pavithran:9790436040@cluster1.oxk2vdh.mongodb.net/'

module.exports = {
  connectToDb: (cb) => {
    MongoClient.connect(url).then((client) => {
      dbConnection = client.db()
      return cb()
    }).catch(err => {
      console.log(err)
      return cb(err)
    })
  },
  getDb: () => { dbConnection }
}
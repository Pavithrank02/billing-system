const mongoose = require("mongoose");
const { DB_USER, DB_PASS, DB_NAME } = require("../");

mongoose.connect(
  `mongodb+srv://pavithran:VzVwQJaxpvHWEnnJ@cluster1.oxk2vdh.mongodb.net/`
);

module.exports = mongoose;

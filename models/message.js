const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const feedSchema = new Schema({
  name : {
    type: String,
  },
  post : {
    type : String,
  },
})

const Message = mongoose.model("Message", feedSchema);

module.exports = {
  Message,
};

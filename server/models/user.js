const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  empName: {
      type: String
    },
    empEmail: {
      type: String
    },
    empAddress: {
      type: String
    },
    empMobileNo: {
      type: String,
      min:10,
      max:10
    },
    empPassword: {
      type: String
    }
})
const User = mongoose.model("user", userSchema);
module.exports = User;
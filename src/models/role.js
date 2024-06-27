import {Schema, model} from "mongoose"

const roleSchema = new Schema({
  description: {
    type: String,
    required: true,
    maxlength: 250
  },
  status: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = model('role', roleSchema);

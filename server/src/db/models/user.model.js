import { model, Schema } from "mongoose";

const schema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isOnline: {
    type: Boolean,
    required: true,
    default: false,
  },
});

export default model("user", schema);

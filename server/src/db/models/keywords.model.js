import { model, Schema } from "mongoose";

const schema = new Schema({
  user_id: {
    type: String,
    required: true,
  },
  news_id: {
    type: String,
    required: true,
  },
  keywors: {
    type: JSON,
    required: true,
    default: [],
  },
});

export default model("keyword", schema);

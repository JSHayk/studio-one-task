import { model, Schema } from "mongoose";

const schema = new Schema({
  keywords: {
    type: JSON,
    default: [],
  },
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  pubDate: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  contentSnippet: {
    type: String,
    required: true,
  },
  guid: {
    type: String,
    required: true,
  },
  isoDate: {
    type: String,
    required: true,
  },
});

export default model("new", schema);

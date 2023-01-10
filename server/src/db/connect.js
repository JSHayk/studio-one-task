import mongoose from "mongoose";
import config from "../config/config.js";
const { dbConfig } = config;

// DB connection configuration
async function connect() {
  try {
    await mongoose.connect(dbConfig.db_uri);
    console.log("DB is connected!");
  } catch (err) {
    throw new Error(err.message);
  }
}

export default connect;

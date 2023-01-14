import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import config from "./config/config.js";
import store from "./store/index.js";
import connect from "./db/connect.js";
import router from "./routes/router.js";

const {
  appConfig: { port, sync_interval, client_url },
} = config;
const app = express();
// Middlewares
app.use(express.json()); // Sending json body
app.use(express.urlencoded()); // Sending forms
app.use(cors({ origin: client_url, credentials: true })); // Allowing access for client
app.use(cookieParser()); // Saving tokens in cookies
app.use("/api", router); // Switching all routes by '/api'

// App Configuration
// setInterval(store.sync, sync_interval);
(async () => {
  try {
    await connect(); // Connecting to DB
    await store.sync(); // Geting all data
    app.listen(port, () => {
      console.log(`Server listened on port ${port}`);
    });
  } catch (err) {
    throw new Error(err.message);
  }
})();

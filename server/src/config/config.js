import { env } from "process";
import dotenv from "dotenv";
dotenv.config();

const config = {
  appConfig: {
    port: env.PORT || 8000,
    sync_interval: env.SYNC_INTERVAL || 10000,
    client_url: env.CLIENT_URL || "http://localhost:3000",
  },
  dbConfig: {
    db_uri: env.DB_URI,
  },
  tokensConfig: {
    secret_token: env.SECRET_TOKEN,
    expires_time: env.EXPIRES_TIME || "1h",
  },
  cookiesConfig: {
    max_age: 30 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
  rssConfig: {
    rss_feed_url: env.RSS_FEED_URL || "",
  },
};

export default Object.freeze(config);

import Parser from "rss-parser";
import config from "../config/config.js";
import newsModel from "../db/models/news.model.js";

const {
  rssConfig: { rss_feed_url },
} = config;

const rssService = {
  async convertRss() {
    const parser = new Parser();
    try {
      const feed = await parser.parseURL(rss_feed_url);
      return feed.items;
    } catch (err) {
      throw new Error(err.message);
    }
  },
};

export default Object.freeze(rssService);

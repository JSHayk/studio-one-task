import query from "../db/query.js";
import newsModel from "../db/models/news.model.js";
import rssService from "./rss.service.js";
import generalService from "./general.service.js";
import invalidArguments from "../helpers/invalidArguments.js";

const newsService = {
  async getAllNews() {
    try {
      const news = await query.get(newsModel);
      return news;
    } catch (err) {
      throw new Error(err.message);
    }
  },
  async getNews(newsId) {
    invalidArguments([newsId]);
    try {
      const [news] = await query.get(newsModel, { _id: newsId });
      return generalService.checkExist(
        news,
        "news",
        "There is no news with this id!"
      );
    } catch (err) {
      throw new Error(err.message);
    }
  },
  async addNews(data) {
    invalidArguments([data]);
    try {
      await query.add(newsModel, data);
    } catch (err) {
      throw new Error(err.message);
    }
  },

  async syncNews() {
    await newsModel.deleteMany({});
    const rssFeed = await rssService.convertRss();
    rssFeed.map(async (item) => {
      try {
        await this.addNews(item);
      } catch (err) {
        throw new Error(err.message);
      }
    });
  },
};

export default Object.freeze(newsService);

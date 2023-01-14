import mongoose from "mongoose";
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
  async addKeywords(newsId, userId, keywords) {
    invalidArguments([newsId, userId, keywords]);
    try {
      const [news] = await query.get(newsModel, { _id: newsId });
      const check = generalService.checkExist(
        news,
        "news",
        "There is no news with this id",
        "The keywords have been added"
      );
      if (!check.isExist) return check;
      news.keywords = [
        ...news.keywords,
        {
          _id: new mongoose.Types.ObjectId(),
          keywords,
          user_id: userId,
        },
      ];
      await news.save();
      return check;
    } catch (err) {
      throw new Error(err.message);
    }
  },
  async editKeywords(newsId, keywordsId, keywords) {
    invalidArguments([newsId, keywordsId, keywords]);
    try {
      const [news] = await query.get(newsModel, { _id: newsId });
      if (!news) return { sc: 404, ms: "There is no news with this id" };
      news.keywords = news.keywords.map((item) => {
        if (item._id.toString() === keywordsId) {
          news[item] = {
            ...item,
            keywords,
          };
          return news[item];
        }
        return item;
      });
      await news.save();
      return {
        sc: 200,
        ms: "The keywords has been edited",
      };
    } catch (err) {
      throw new Error(err.message);
    }
  },
  async deleteKeywords(newsId, keywordsId) {
    invalidArguments([newsId, keywordsId]);
    try {
      const [news] = await query.get(newsModel, { _id: newsId });
      if (!news) return { sc: 404, ms: "There is no news with this id" };
      news.keywords = news.keywords.filter(
        (item) => item._id.toString() !== keywordsId
      );
      await news.save();
      return {
        sc: 200,
        ms: "The keywords has been deleted",
      };
    } catch (err) {
      throw new Error(err.message);
    }
  },
  async syncNews() {
    // await newsModel.deleteMany({});
    const rssFeed = await rssService.convertRss();
    await Promise.all(
      rssFeed.map(async (item) => {
        try {
          await this.addNews(item);
        } catch (err) {
          throw new Error(err.message);
        }
      })
    );
  },
};

export default Object.freeze(newsService);

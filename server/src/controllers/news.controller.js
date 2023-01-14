import newsService from "../services/news.service.js";

const newsController = {
  async getAllNews(req, res) {
    const news = await newsService.getAllNews(); //store.getState().news;
    res.status(200).send(news);
  },
  async getNews(req, res) {
    const { id } = req.params;
    try {
      const { sc, ms, data } = await newsService.getNews(id);
      res.status(sc).send((data && data.news) || { ms });
    } catch (err) {
      throw new Error(err.message);
    }
  },
  async addKeywords(req, res) {
    const { userId, newsId } = req.params;
    const { keywords } = req.body;
    try {
      const { sc, ms } = await newsService.addKeywords(
        newsId,
        userId,
        keywords
      );
      res.status(sc).send({ ms });
    } catch (err) {
      throw new Error(err.message);
    }
  },
  async editKeywords(req, res) {
    const { newsId, keywordsId } = req.params;
    const { keywords } = req.body;
    try {
      const { sc, ms } = await newsService.editKeywords(
        newsId,
        keywordsId,
        keywords
      );
      res.status(sc).send({ ms });
    } catch (err) {
      throw new Error(err.message);
    }
  },
  async deleteKeywords(req, res) {
    const { newsId, keywordsId } = req.params;
    try {
      const { sc, ms } = await newsService.deleteKeywords(newsId, keywordsId);
      res.status(sc).send({ ms });
    } catch (err) {
      throw new Error(err.message);
    }
  },
};

export default Object.freeze(newsController);

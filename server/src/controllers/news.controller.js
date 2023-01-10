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
};

export default Object.freeze(newsController);

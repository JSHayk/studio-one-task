import newsService from "../services/news.service.js";

const store = {
  async sync() {
    try {
      await newsService.syncNews();
    } catch (err) {
      throw new Error(err.message);
    }
  },
};

export default Object.freeze(store);

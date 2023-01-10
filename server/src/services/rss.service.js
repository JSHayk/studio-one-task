import Parser from "rss-parser";

const rssService = {
  async compileRss() {
    const parser = new Parser();
    try {
      const feed = await parser.parseURL(
        "http://feeds.bbci.co.uk/news/rss.xml"
      );
      console.log(feed, "feed");
    } catch (err) {
      throw new Error(err.message);
    }
  },
};

rssService
  .compileRss()
  .then(() => {
    console.log("then");
  })
  .catch((err) => {
    console.error(err);
  });

export default rssService;

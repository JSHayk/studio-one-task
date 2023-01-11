import Parser from "rss-parser";

const parser = new Parser();

parser
  .parseURL("https://www.bbc.com/news/health-64229958")
  .then((res) => {
    const fileName = `${res.title
      .replace(/\s+/g, "-")
      .replace(/[/\\?%*:|"<>]/g, "")
      .toLowerCase()}.json`;
    console.log(fileName, "filename");
  })
  .catch((err) => {
    console.error(err);
  });

  // 63bea6dc093f9fb7859eca46
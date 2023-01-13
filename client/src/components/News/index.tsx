import { memo, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { $GetNews } from "../../api";
import { addNews } from "../../store/slices/news.slice";
// Common
import Container from "../../common/Container";
import Section from "../../common/Section";
import NewsItem from "./NewsItem";
import "./index.scss";

const News = () => {
  const data = useAppSelector((state) => state.news.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getNews = async () => {
      try {
        const news = await $GetNews();
        dispatch(addNews(news));
      } catch (err: any) {
        throw new Error(err);
      }
    };
    getNews();
  }, [dispatch]);

  return (
    <Section className="news wrapper">
      <Container className="news-container">
        {data?.map((item) => {
          const { _id, title, pubDate } = item;
          return <NewsItem id={_id} title={title} pubDate={pubDate} />;
        })}
      </Container>
    </Section>
  );
};

export default memo(News);

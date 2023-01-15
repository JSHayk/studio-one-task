import { memo, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { $GetNews } from "../../api";
import { addNews } from "../../store/slices/news.slice";
import NewsItem from "./NewsItem";
// Common
import Container from "../../common/Container";
import Section from "../../common/Section";
import "./index.scss";

const News = () => {
  const { data, isLoading } = useAppSelector((state) => state.news);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Section className="news wrapper">
          <Container className="news-container">
            {data?.map((item) => {
              const { _id, title, pubDate } = item;
              return <NewsItem id={_id} title={title} pubDate={pubDate} />;
            })}
          </Container>
        </Section>
      )}
    </>
  );
};

export default memo(News);

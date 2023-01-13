import { FC, memo } from "react";
// Common
import Container from "../../common/Container";
import Image from "../../common/Image";
import Text from "../../common/Text";
import Title from "../../common/Title";

interface INewsItem {
  id: string;
  title: string;
  pubDate: string;
}

const NewsItem: FC<INewsItem> = ({ id, title, pubDate }) => {
  return (
    <Container
      key={id}
      className="news-container-item small-item" // {randomNum === 1 ? "news-container-item" : "small-item"}
    >
      <Container className="news-container-item-info">
        <Title>{title}</Title>
        <Text className="date">{pubDate}</Text>
      </Container>
      <Image src="https://discussion.qodeinteractive.com/wp-content/uploads/2016/02/mustang-teases-new-model-with-powerful-promo.jpg" />
    </Container>
  );
};

export default memo(NewsItem);

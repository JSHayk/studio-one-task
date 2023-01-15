import { Link } from "react-router-dom";
import Router from "../../const/router";
// Common
import Section from "../../common/Section";
import Container from "../../common/Container";
import Image from "../../common/Image";
import NotFoundImage from "../../assets/not-found.png";
import Title from "../../common/Title";
import Text from "../../common/Text";
import "./index.scss";

const NotFound = () => {
  return (
    <Section className="not-found">
      <Container className="not-found-info">
        <Container className="row">
          <Title>404</Title>
        </Container>
        <Text className="description">
          Woops. Looks like this page doesn’t exist.
        </Text>
        <Container className="not-found-info-back">
          <Text>back to</Text>
          <Link to={Router.HOME}>home</Link>
        </Container>
      </Container>
      <Container className="not-found-image">
        <Image src={NotFoundImage} alt="not-found" />
      </Container>
    </Section>
  );
};

export default NotFound;

import { memo } from "react";
import { Link } from "react-router-dom";
import Router from "../../const/router";
// Common
import Section from "../../common/Section";
import Image from "../../common/Image";
// Assets
import LogoIcon from "../../assets/news.png";
import EnterIcon from "../../assets/enter.png";

import "./index.scss";
import Container from "../../common/Container";

const Header = () => {
  return (
    <Section className="header">
      <Container className="wrapper">
        <Link to={Router.HOME} className="logo">
          <Image src={LogoIcon} />
        </Link>
        <Link to={Router.REGISTER} className="logo">
          <Image src={EnterIcon} />
        </Link>
      </Container>
    </Section>
  );
};

export default memo(Header);

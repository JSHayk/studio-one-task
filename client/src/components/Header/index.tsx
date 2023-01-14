import { memo } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/useRedux";
import Router from "../../const/router";
// Common
import Section from "../../common/Section";
import Image from "../../common/Image";
import Container from "../../common/Container";
// Assets
import LogoIcon from "../../assets/news.png";
import EnterIcon from "../../assets/enter.png";
import ProfileIcon from "../../assets/profile.png";
import "./index.scss";

const Header = () => {
  const isLoged = useAppSelector((state) => state.auth.isLoged);
  return (
    <Section className="header">
      <Container className="wrapper">
        <Link to={Router.HOME} className="logo">
          <Image src={LogoIcon} />
        </Link>
        <Container className="row">
          {isLoged ? (
            <Link to={Router.PROFILE} className="logo">
              <Image src={ProfileIcon} />
            </Link>
          ) : (
            <Link to={Router.REGISTER} className="logo">
              <Image src={EnterIcon} />
            </Link>
          )}
        </Container>
      </Container>
    </Section>
  );
};

export default memo(Header);

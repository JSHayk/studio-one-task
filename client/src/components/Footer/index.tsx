import { memo } from "react";
// Common
import Container from "../../common/Container";
import Image from "../../common/Image";
import Section from "../../common/Section";
// Assets
import ArrowUpIcon from "../../assets/arrow-up.png";
import "./index.scss";

const Footer = () => {
  return (
    <Section className="footer">
      <Container className="arrow-icon">
        <Image src={ArrowUpIcon} alt="arrow-up" />
      </Container>
    </Section>
  );
};

export default memo(Footer);

import { memo } from "react";
// Common
import Text from "../../common/Text";
import Section from "../../common/Section";
import "./index.scss";

const Footer = () => {
  return (
    <Section className="footer">
      <Text>JSHayk</Text>
    </Section>
  );
};

export default memo(Footer);

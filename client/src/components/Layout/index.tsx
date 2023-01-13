import { ReactNode, FC, memo } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Section from "../../common/Section";

interface ILayout {
  children?: ReactNode;
}

const Layout: FC<ILayout> = ({ children }) => {
  return (
    <Section className="main-container">
      <Header />
      {children}
      <Footer />
    </Section>
  );
};

export default memo(Layout);

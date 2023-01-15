import { ToastContainer } from "react-toastify";
import Layout from "../components/Layout";
import News from "../components/News";

const HomePage = () => {
  return (
    <Layout>
      <News />
      <ToastContainer />
    </Layout>
  );
};

export default HomePage;

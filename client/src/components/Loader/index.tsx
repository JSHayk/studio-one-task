import "./index.scss";

const Loader = () => {
  return (
    <section className="body-l">
      <div className="aboutt">
        <a
          className="bg_links sociall portfolioo"
          href="https://www.rafaelalucas.com"
          target="_blank"
          rel="noreferrer"
        >
          <span className="iconn"></span>
        </a>
        <a
          className="bg_links sociall dribbble"
          href="https://dribbble.com/rafaelalucas"
          target="_blank"
          rel="noreferrer"
        >
          <span className="iconn"></span>
        </a>
        <a
          className="bg_links sociall linkedin"
          href="https://www.linkedin.com/in/rafaelalucas/"
          target="_blank"
          rel="noreferrer"
        >
          <span className="iconn"></span>
        </a>
      </div>

      <div className="content">
        <div className="planet">
          <div className="ring"></div>
          <div className="cover-ring"></div>
          <div className="spots">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <p>loading</p>
      </div>
    </section>
  );
};

export default Loader;

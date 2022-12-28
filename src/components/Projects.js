// Import Assets
import moneyswap from "../assets/comingsoon.png";
import inzoo from "../assets/comingsoon.png";
import eths from "../assets/comingsoon.png";

const Projects = () => {
  return (
    <section className="projects">
      <h2>My Projects</h2>

      <div className="projects__cards">
        <div className="projects__card">
          <h3>Moneyswap</h3>
          <img src={moneyswap} alt="Moneyswap Swap Page" />
          <p>
            Decentralized money transfering platform. Facilitates
            international transfers and provides extra support for large transactions.
          </p>

          <a
            href="https://google.com/"
            target="_blank"
            className="button"
            rel="noreferrer"
          >
            Site
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            className="button"
            rel="noreferrer"
          >
            Code
          </a>
        </div>

        <div className="projects__card">
          <h3>Inzoo</h3>
          <img src={inzoo} alt="Inzoo Landing Page" />
          <p>
            Decentralized real estate buying & selling platform.
            Streamlines the house buying & selling process. Reduces fees to nearly zero.
          </p>

          <a
            href="https://google.com/"
            target="_blank"
            className="button"
            rel="noreferrer"
          >
            Site
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            className="button"
            rel="noreferrer"
          >
            Code
          </a>
        </div>

        <div className="projects__card">
          <h3>.eths</h3>
          <img src={eths} alt=".eths Landing Page" />
          <p>
            WEB3-based domain provider for decentralized applications.
            More efficent pricing model with a secure certificate of ownership.
          </p>

          <a
            href="https://google.com/"
            rel="noreferrer"
            target="_blank"
            className="button"
          >
            Site
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            className="button"
            rel="noreferrer"
          >
            Code
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

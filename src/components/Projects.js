// Import Assets
import dlottery from "../assets/dlottery.png";
import inzoo from "../assets/comingsoon.png";
import eths from "../assets/comingsoon.png";

const Projects = () => {
  return (
    <section className="projects">
      <h2>My Projects</h2>

      <div className="projects__cards">
        <div className="projects__card">
          <h3>DLottery</h3>
          <img src={dlottery} alt="Decentralized Lottery Page" />
          <p>
            Decentralized lottery platform. DeFi lottery systems offers users
            the option to make big bucks without leaving their homes, more and
            more consumers are switching to them from conventional lotteries...
          </p>

          <a
            href="https://round-hill-7812.on.fleek.co"
            target="_blank"
            className="button"
            rel="noreferrer"
          >
            Site
          </a>
          <a
            href="https://github.com/fiatbruno/hardhat-decentralized-lottery"
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
            Decentralized real estate buying & selling platform. Streamlines the
            house buying & selling process. Reduces fees to nearly zero.
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
            WEB3-based domain provider for decentralized applications. More
            efficent pricing model with a secure certificate of ownership.
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

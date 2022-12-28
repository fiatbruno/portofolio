// Import Assets
import profile from '../assets/profile.jpeg';

const Header = () => {
    ///Setting up the scroll button
    // const myRef = "talk";
    // const executeScroll = () => myRef.current.scrollIntoView();
    return (
      <section className="header">
        <img src={profile} alt="Fiat Bruno " />

        <div className="header__content">
          <h1>Hi, I'm Fiat Bruno</h1>
          <p>Solidity Developer</p>
          <button className="button" /*onClick={executeScroll}*/>
            Let's Talk
          </button>
        </div>
      </section>
    );
}

export default Header;
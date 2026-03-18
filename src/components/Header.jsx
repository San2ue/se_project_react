import "../blocks/Header.css";
import headerLogo from "../images/wtwrlogo.svg";
import avatar from "../images/avatar.png";

function Header({ handleAddItem, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="App logo" />
      <p className="header__date-location">
        {currentDate}, {weatherData.city}
      </p>
      <button
        className="header__add-clothes-btn"
        type="button"
        onClick={handleAddItem}
      >
        + Add clothes
      </button>
      <div className="header__user">
        <p className="header__user-name">Sean May</p>
        <img className="header__user-avatar" src={avatar} alt="Sean May" />
      </div>
    </header>
  );
}

export default Header;

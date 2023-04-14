import { smallLogo } from "src/img";
import "./style.scss";

const Header = ({ title, children }) => {
  return (
    <div className="header">
      <div className="header-content">
        <img className="header-content__picture"
          src={smallLogo}
          alt="header logo" />
        <p className="header-content__title">{title}</p>
      </div>
      <div className="header-children">
        <div className="children-content">{children}</div>
      </div>

    </div>

  );
};
export default Header;
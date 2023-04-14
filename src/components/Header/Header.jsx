import "./style.scss"
import { smallLogo } from "../../img";
import "./style.scss";

const Header = (props) => {
  return (
    <div className="header">
      <div className="header-content">
        <img className="header-content__picture"
          src={smallLogo}
          alt="header logo" />
        <p className="header-content__title">{props.title}</p>
      </div>
      <div className="header-children">
        <div className="children-content">{props.children}</div>
      </div>

    </div>

  );
};
export default Header;
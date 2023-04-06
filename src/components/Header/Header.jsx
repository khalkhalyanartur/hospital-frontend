import "./style.scss"
import { smallLogo } from "../../img";
import "./style.scss";

const Header = (props) => {
  return (
    <div className="header">
      <img className="header__picture"
      src={ smallLogo }
      alt="header logo" />
      <p className="header__title">{props.title}</p>
    </div>
  );
};
export default Header;
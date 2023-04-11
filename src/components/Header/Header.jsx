import { smallLogo } from "src/img";
import "./style.scss";

const Header = ({ title }) => {
  return (
    <div className="header">
      <img className="header__picture"
        src={smallLogo}
        alt="header logo" 
      />
      <p className="header__title">{title}</p>
    </div>
  );
};
export default Header;
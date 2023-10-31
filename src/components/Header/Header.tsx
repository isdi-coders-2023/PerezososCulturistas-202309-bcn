import Navigation from "../Navigation/Navigation";
import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <img
        className="header-logo"
        src="/images/logo.webp"
        alt="DragonBall logo"
      ></img>
      <Navigation />
    </HeaderStyled>
  );
};
export default Header;

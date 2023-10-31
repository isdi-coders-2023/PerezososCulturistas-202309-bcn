import Navigation from "../Navigation/Navigation";
import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <img
        className="header-logo"
        src="/images/logo.webp"
        alt="DragonBall logo"
        width={343}
        height={125}
      ></img>
      <Navigation />
    </HeaderStyled>
  );
};
export default Header;

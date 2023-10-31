import NavigationStyled from "./NavigationStyled";

const Navigation = (): React.ReactElement => {
  return (
    <NavigationStyled>
      <ul className="navigation">
        <li className="navigation__option">home</li>
        <li className="navigation__option">create</li>
      </ul>
    </NavigationStyled>
  );
};

export default Navigation;

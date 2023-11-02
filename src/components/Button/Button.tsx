import { PropsWithChildren } from "react";
import ButtonStyled from "./ButtonStyled";

interface ButtonProps extends PropsWithChildren {
  actionOnClick: () => void;
  text?: string;
  disabled?: boolean;
}

const Button = ({
  actionOnClick,
  children,
}: ButtonProps): React.ReactElement => {
  return (
    <ButtonStyled className="button" onClick={actionOnClick}>
      {children}
    </ButtonStyled>
  );
};

export default Button;

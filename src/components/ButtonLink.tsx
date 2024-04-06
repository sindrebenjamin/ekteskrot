import { NavLink } from "react-router-dom";
import { MouseEventHandler } from "react";

interface ButtonLinkProps {
  size: string;
  color: string;
  hoverState: string;
  children: React.ReactNode;
  linkTo: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

const ButtonLink = ({
  size,
  color,
  hoverState,
  children,
  linkTo,
  onClick,
}: ButtonLinkProps) => {
  return (
    <NavLink
      onClick={onClick}
      to={linkTo}
      className={`${size} ${color} ${hoverState} rounded-sm transition-colors ease-in-out duration-100 flex justify-center items-center gap-1 font-bold`}
    >
      {children}
    </NavLink>
  );
};

export default ButtonLink;

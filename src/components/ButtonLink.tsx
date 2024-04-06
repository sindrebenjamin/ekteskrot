import { NavLink } from "react-router-dom";

interface ButtonLinkProps {
  size: string;
  color: string;
  hoverState: string;
  children: React.ReactNode;
  linkTo: any;
}

const ButtonLink = ({
  size,
  color,
  hoverState,
  children,
  linkTo,
}: ButtonLinkProps) => {
  return (
    <NavLink
      to={linkTo}
      className={`${size} ${color} ${hoverState} rounded-sm transition-colors ease-in-out duration-100 flex justify-center items-center gap-1 font-bold`}
    >
      {children}
    </NavLink>
  );
};

export default ButtonLink;
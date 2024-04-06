import { MouseEventHandler } from "react";

interface ButtonProps {
  size: string;
  color: string;
  hoverState: string;
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  size,
  color,
  hoverState,
  children,
  onClick,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${size} ${color} ${hoverState} rounded-sm transition-colors ease-in-out duration-100 flex justify-center items-center gap-1 font-bold`}
    >
      {children}
    </button>
  );
};

export default Button;

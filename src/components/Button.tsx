import { MouseEventHandler } from "react";

interface ButtonProps {
  size: string;
  color: string;
  hoverState: string;
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "submit" | "reset" | "button";
}

const Button = ({
  size,
  color,
  hoverState,
  children,
  onClick,
  type,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${size} ${color} ${hoverState} rounded-sm transition-colors ease-in-out duration-100 flex justify-center items-center gap-1 font-bold`}
    >
      {children}
    </button>
  );
};

export default Button;

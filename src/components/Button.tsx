interface ButtonProps {
  size: string;
  color: string;
  hoverState: string;
  children: React.ReactNode;
}

const Button = ({ size, color, hoverState, children }: ButtonProps) => {
  return (
    <button
      className={`${size} ${color} ${hoverState} rounded-sm transition-colors ease-in-out duration-100 flex justify-center items-center gap-2.5`}
    >
      {children}
    </button>
  );
};

export default Button;

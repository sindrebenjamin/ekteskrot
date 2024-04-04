interface MenuButtonProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MenuButton = ({ isOpen, setIsOpen }: MenuButtonProps) => {
  const topClasses = isOpen
    ? "rotate-[-45deg] bg-white"
    : "translate-y-[-8px] bg-white";

  const middleClasses = isOpen ? "bg-white opacity-0" : "bg-white";

  const bottomClasses = isOpen
    ? "rotate-45 bg-white"
    : "translate-y-[8px] bg-white";

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="flex flex-col z-20 w-[24px] relative md:hidden"
    >
      {/* Top */}
      <div
        className={`${topClasses} h-[3px] w-full rounded-sm transition-transform duration-100 absolute`}
      ></div>

      {/* Middle */}
      <div
        className={`${middleClasses} h-[3px] w-full rounded-sm absolute transition-transform duration-100`}
      ></div>

      {/* Bottom */}
      <div
        className={`${bottomClasses} h-[3px] w-full rounded-sm transition-transform duration-100 absolute`}
      ></div>
    </button>
  );
};

export default MenuButton;

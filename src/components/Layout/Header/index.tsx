import { useState } from "react";

import Nav from "./Nav";
import Logo from "./Logo";
import MenuButton from "./MenuButton";
import CartButton from "./CartButton";
import { Container } from "../../TailwindComponents";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  const overlayClasses = isOpen
    ? "visible opacity-100 z-[9]"
    : "invisible opacity-0";

  return (
    <header className="bg-amber-700 px-4 sm:px-6 py-3">
      <Container className="flex items-center justify-between gap-8">
        <div className="flex gap-4 items-center">
          <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
          <Logo />
        </div>
        <Nav isOpen={isOpen} />
        <CartButton />
        <div
          onClick={() => setIsOpen(false)}
          className={`${overlayClasses} bg-black bg-opacity-60 h-screen w-full left-0 top-0 absolute transition-all duration-200 z-30`}
        ></div>
      </Container>
    </header>
  );
};

export default Header;

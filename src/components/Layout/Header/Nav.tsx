import { NavLink } from "react-router-dom";

interface NavProps {
  isOpen: boolean;
  setIsOpen: (() => void) | null | undefined;
}

const Nav = ({ isOpen, setIsOpen }: NavProps) => {
  const navClasses = isOpen
    ? "translate-x-0"
    : "-translate-x-full md:translate-x-0";

  return (
    <nav
      className={`${navClasses} flex justify-center items-center md:justify-end h-screen md:h-fit w-[80%] top-0 left-0 absolute md:static bg-amber-700 md:bg-transparent z-40 duration-200 transition-transform transform whitespace-nowrap text-white font-bold md:text-sm`}
    >
      <ul className="flex flex-col md:flex-row gap-8 md:gap-6 items-center ">
        <NavigationLink setIsOpen={setIsOpen} linkTo="/">
          Home
        </NavigationLink>
        <NavigationLink setIsOpen={setIsOpen} linkTo="/contact">
          Contact
        </NavigationLink>
        <NavigationLink setIsOpen={setIsOpen} linkTo="/cart">
          Cart
        </NavigationLink>
      </ul>
    </nav>
  );
};

export default Nav;

interface NavigationLinkProps {
  linkTo: string;
  children: React.ReactNode;
  setIsOpen: (() => void) | null | undefined;
}

interface NavLinkProps {
  isActive: boolean;
}

const NavigationLink = ({
  children,
  linkTo,
  setIsOpen,
}: NavigationLinkProps) => {
  const getClassName = ({ isActive }: NavLinkProps) =>
    isActive ? "underline" : "";
  return (
    <li className="duration-100 transition-opacity opacity-100 hover:opacity-50">
      <NavLink
        onClick={() => setIsOpen(false)}
        className={getClassName}
        to={linkTo}
      >
        {children}
      </NavLink>
    </li>
  );
};

import { NavLink } from "react-router-dom";

interface NavProps {
  isOpen: boolean;
}

const Nav = ({ isOpen }: NavProps) => {
  const navClasses = isOpen
    ? "translate-x-0"
    : "-translate-x-full md:translate-x-0";

  return (
    <nav
      className={`${navClasses} flex justify-center items-center md:justify-end  h-screen md:h-fit w-[80%] top-0 left-0 absolute md:static bg-amber-700 md:bg-transparent z-10 duration-200 transition-transform transform whitespace-nowrap text-white font-bold md:text-sm`}
    >
      <ul className="flex flex-col md:flex-row gap-8 md:gap-6 items-center ">
        <NavigationLink linkTo="/">Home</NavigationLink>
        <NavigationLink linkTo="/contact">Contact</NavigationLink>
        <NavigationLink linkTo="/cart">Cart</NavigationLink>
      </ul>
    </nav>
  );
};

export default Nav;

interface NavigationLinkProps {
  linkTo: string;
  children: React.ReactNode;
}

interface NavLinkProps {
  isActive: boolean;
}

const NavigationLink = ({ children, linkTo }: NavigationLinkProps) => {
  const getClassName = ({ isActive }: NavLinkProps) =>
    isActive ? "underline" : "";
  return (
    <li className="duration-100 transition-opacity opacity-100 hover:opacity-50">
      <NavLink className={getClassName} to={linkTo}>
        {children}
      </NavLink>
    </li>
  );
};

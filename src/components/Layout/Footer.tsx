const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="bg-amber-900 text-white px-6 py-6 text-center">
      <p>Copyright &copy; {year}</p>
    </footer>
  );
};

export default Footer;

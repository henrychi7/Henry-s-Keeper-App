function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <p>© {currentYear} Henry's Keeper</p>
    </footer>
  );
}

export default Footer;

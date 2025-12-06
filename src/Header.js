import Nav from './Nav';

function Header() {
  return (
    <header>
      <img src='Logo.svg' alt='Logo of little lemon restaurant' width={148} height={40} />
      <Nav />
    </header>
  );
}

export default Header;

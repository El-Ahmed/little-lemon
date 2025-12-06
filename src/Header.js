import Nav from './Nav';

function Header() {
  return (
    <header>
        <img src='Logo.svg' alt='Logo of little lemon restaurant' width={200} height={75} />
        <Nav />
    </header>
  );
}

export default Header;

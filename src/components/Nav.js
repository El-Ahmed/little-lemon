import { Link } from "react-router-dom";

function Nav({ onLinkClick }) {
    return (
        <nav aria-label="Site navigation">
            <ul>
                <li><Link to="/" onClick={onLinkClick}>Home</Link></li>
                <li><Link to="/about" onClick={onLinkClick}>About</Link></li>
                <li><Link to="/menu" onClick={onLinkClick}>Menu</Link></li>
                <li><Link to="/booking" onClick={onLinkClick}>Reservations</Link></li>
                <li><Link to="/order-online" onClick={onLinkClick}>Order Online</Link></li>
                <li><Link to="/login" onClick={onLinkClick}>Login</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;

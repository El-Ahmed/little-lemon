
function Footer() {
    return (
        <footer>
            <img src="logo-green.png" alt="Logo of little lemon restaurant" width="190" height="258" />
            <div>
                <nav>
                    <h3>Doormat Navigation</h3>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/reservations">Reservations</a></li>
                        <li><a href="/order-online">Order Online</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>
                </nav>

                <section>
                    <h3>Contact</h3>
                    <address>
                        <p>Little Lemon</p>
                        <p>123 Example Street City, Region, 00000</p>
                        <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
                        <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>
                    </address>
                </section>

                <section>
                    <h3>Social</h3>
                    <ul>
                        <li><a href="https://facebook.com/example" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page">Facebook</a></li>
                        <li><a href="https://instagram.com/example" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram profile">Instagram</a></li>
                    </ul>
                </section>
            </div>
        </footer>
    );
}

export default Footer;

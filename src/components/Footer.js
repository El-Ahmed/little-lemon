import Nav from "./Nav";

function Footer() {
    return (
        <footer>
            <img src="logo-green.png" alt="Logo of little lemon restaurant" width="190" height="258" />
            <div>
                <section aria-label="Doormat Navigation">
                    <h3>Doormat Navigation</h3>

                    <Nav />
                </section>

                <section aria-label="Contact Information">
                    <h3>Contact</h3>
                    <address>
                        <p>Little Lemon</p>
                        <p>123 Example Street City, Region, 00000</p>
                        <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
                        <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>
                    </address>
                </section>

                <section aria-label="Social Media Links">
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


function Hero() {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <div className="hero-text">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <a href="/reserve-table" className="button">Reserve a Table</a>
                </div>
                <img src="restauranfood.jpg" width={400} height={500} alt="Hero image" />
            </div>
        </section>
    )
}

export default Hero;
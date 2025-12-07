
function Chicago() {
    return (
        <section className="hero-section chicago" aria-label="Restaurant introduction">
            <div>
                <div className="hero-text">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                </div>
                <img src="restaurant.jpg" width={300} height={400} alt="View inside the restaurant" className="restaurant" />
                <img src="restaurant chef B.jpg" width={300} height={400} alt="Chef preparing a dish" className="restaurant-chef" />
            </div>
        </section>
    )
}

export default Chicago;
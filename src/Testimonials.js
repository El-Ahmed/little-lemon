
function Testimonials() {
    const testimonials = [
        {
            rating: 5,
            name: "Emma Johnson",
            text: "The food at Little Lemon is always fresh and full of flavor. I can’t get enough of their dishes!",
        },
        {
            rating: 4,
            name: "Michael Brown",
            text: "Cozy atmosphere and friendly staff. A perfect place to enjoy a relaxed meal with friends.",
        },
        {
            rating: 5,
            name: "Sophia Lee",
            text: "Little Lemon never disappoints. Delicious meals and great service every time I visit.",
        },
        {
            rating: 4,
            name: "James Smith",
            text: "I love the variety of dishes and the freshness of the ingredients. Highly recommend Little Lemon!",
        },
    ];
    return (
        <section className="testimonials">
            <div>
                <h2>Testimonials</h2>
                {testimonials.map((t, index) => (
                    <article key={index} className="testimonial">
                        <div className="rating">{'★'.repeat(t.rating) + '☆'.repeat(5 - t.rating)}</div>
                        <h4>{t.name}</h4>
                        <p>{t.text}</p>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Testimonials;
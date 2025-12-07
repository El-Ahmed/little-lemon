import { Link } from "react-router-dom";

const specials = [
    {
        title: 'Greek salad',
        description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
        price: '12.99',
        image: 'greek salad.jpg'
    },
    {
        title: 'Bruchetta',
        description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
        price: '5.99',
        image: 'bruchetta.jpg'
    },
    {
        title: 'Lemon Dessert',
        description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
        price: '5.00',
        image: 'lemon dessert.jpg'
    }
]

function Specials() {
    return (
        <section aria-label="Weekly specials">
            <div>
                <h2>This week's specials!</h2>
                <a href="/online-menu" className="button">Online Menu</a>
            </div>
            <div className="specials">
                {specials.map(special => (
                    <article key={special.title} className="dish">
                        <figure>
                            <img src={special.image} alt={special.title} height={180} width={260} />
                        </figure>
                        <div>
                            <div className="card-header">
                                <h3 className="card-title">{special.title}</h3>
                                <span className="price">${special.price}</span>
                            </div>
                            <p>
                                {special.description}
                            </p>
                            <Link to="/" aria-label={`Order a delivery for ${special.title}`}>Order a delivery</Link>
                        </div>
                    </article>
                ))}

            </div>
        </section>
    )
}

export default Specials;
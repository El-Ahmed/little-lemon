import BookingForm from "../components/BookingForm";

function BookingPage() {
    return (
        <>
            <section className="hero-section without-image">
                <div>
                    <h1>Reservation</h1>
                </div>
            </section>
            <section>
                <div>
                    <BookingForm />
                </div>
            </section>
        </>
    );
}

export default BookingPage;


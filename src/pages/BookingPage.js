import BookingForm from "../components/BookingForm";

function BookingPage({ availableTimes, dispatch }) {
    return (
        <>
            <section className="hero-section without-image">
                <div>
                    <h1>Reservation</h1>
                </div>
            </section>
            <section>
                <div>
                    <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
                </div>
            </section>
        </>
    );
}

export default BookingPage;


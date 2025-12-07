import BookingForm from "../components/BookingForm";

function BookingPage({ availableTimes, dispatch, submitBooking }) {
    return (
        <>
            <section className="hero-section without-image" aria-label="Reservation page header">
                <div>
                    <h1>Reservation</h1>
                </div>
            </section>
            <section aria-label="Reservation form">
                <div>
                    <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitBooking={submitBooking} />
                </div>
            </section>
        </>
    );
}

export default BookingPage;


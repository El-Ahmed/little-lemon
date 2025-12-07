import BookingForm from "../components/BookingForm";

function BookingPage({ availableTimes, dispatch, submitBooking }) {
    return (
        <>
            <section className="hero-section without-image">
                <div>
                    <h1>Reservation</h1>
                </div>
            </section>
            <section>
                <div>
                    <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitBooking={submitBooking} />
                </div>
            </section>
        </>
    );
}

export default BookingPage;


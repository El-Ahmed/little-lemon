import ConfirmedBooking from "../components/ConfirmedBooking";

function ConfirmationPage() {

    return (
        <>
            <section className="hero-section without-image" role="region" aria-label="Reservation page header">
                <div>
                    <h1>Reservation</h1>
                </div>
            </section>
            <section className="confirmation" role="region" aria-label="Reservation confirmation">
                <div>
                    <ConfirmedBooking />
                </div>
            </section>
        </>
    );
}

export default ConfirmationPage;


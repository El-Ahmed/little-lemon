import ConfirmedBooking from "../components/ConfirmedBooking";

function ConfirmationPage() {

    return (
        <>
            <section className="hero-section without-image">
                <div>
                    <h1>Reservation</h1>
                </div>
            </section>
            <section className="confirmation">
                <div>
                    <ConfirmedBooking />
                </div>
            </section>
        </>
    );
}

export default ConfirmationPage;


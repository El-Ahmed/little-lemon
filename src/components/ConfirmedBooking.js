import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function ConfirmedBooking() {
    const [confirmedForm, setConfirmedForm] = useState({})
    const navigate = useNavigate()
    useEffect(() => {
        const storedConfirmedForm = JSON.parse(localStorage.getItem('confirmedForm'))
        if (!storedConfirmedForm?.date) {
            navigate("/booking");
        }
        setConfirmedForm(storedConfirmedForm)
    }, [navigate, setConfirmedForm]);
    return (
        <div className="confirmation">
            <div>
                <img src="/check.svg" alt="check icon" height={16} width={16} />
                <h3>Your reservation has been confirmed</h3>
            </div>
            <ul>
                <li>Date: {confirmedForm.date} </li>
                <li>Time: {confirmedForm.time} </li>
                <li>Occasion: {confirmedForm.occasion}</li>
                <li>Guests: {confirmedForm.guests}</li>
            </ul>
        </div>
    )
}

export default ConfirmedBooking;
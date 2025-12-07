import { useEffect, useState } from "react";

function BookingForm({ availableTimes, dispatch, submitBooking }) {
    const [date, setDate] = useState(new Date().toISOString().split('T')[0])
    const [time, setTime] = useState('')
    const [occasion, setOccasion] = useState('Birthday')
    const [guests, setGuests] = useState(1)
    const handleDateChange = (e) => {
        dispatch({ date: e.target.value });
        setDate(e.target.value);
    };
    useEffect(() => {
        setTime(availableTimes[0])
    }, [availableTimes])

    const handleSubmit = (e) => {
        e.preventDefault()
        submitBooking({
            date: date,
            time: time,
            occasion: occasion,
            guests: guests,
        })
    }

    return (
        <form onSubmit={handleSubmit} >
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={handleDateChange} />
            <label htmlFor="res-time" >Choose time</label>
            <select id="res-time" value={time} onChange={e => setTime(e.target.value)}>
                {availableTimes.map(availableTime => (
                    <option key={availableTime} value={availableTime}>{availableTime}</option>
                ))}
            </select>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)}>
                <option value={'Birthday'}>Birthday</option>
                <option value={'Anniversary'}>Anniversary</option>
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={e => setGuests(e.target.value)} />
            <input type="submit" className="button" value="Make Your reservation" />
        </form>
    )
}

export default BookingForm;
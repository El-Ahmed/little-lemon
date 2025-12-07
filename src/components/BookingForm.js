import { useState } from "react";

function BookingForm() {
    const [date, setDate] = useState()
    const [time, setTime] = useState()
    const [occasion, setOccasion] = useState()
    const [guests, setGuests] = useState(1)
    const [availableTimes, setAvailableTimes] = useState(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'])
    return (
        <form >
            <label for="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={e => setDate(e.target.value)} />
            <label for="res-time" >Choose time</label>
            <select id="res-time" value={time} onChange={e => setTime(e.target.value)}>
                {availableTimes.map(availableTime => (
                    <option key={availableTime} value={availableTime}>{availableTime}</option>
                ))}
            </select>
            <label for="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)}>
                <option value={'Birthday'}>Birthday</option>
                <option value={'Anniversary'}>Anniversary</option>
            </select>
            <label for="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={e => setGuests(e.target.value)} />
            <input type="submit" className="button" value="Make Your reservation" />
        </form>
    )
}

export default BookingForm;
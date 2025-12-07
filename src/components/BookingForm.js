import { useFormik } from "formik";
import { useEffect } from "react";
import { validateBooking } from "../utils/validateBooking";

function BookingForm({ availableTimes, dispatch, submitBooking }) {
    const handleDateChange = (e) => {
        dispatch({ date: e.target.value });
        handleChange(e);
    };
    const { values, errors, handleChange, handleSubmit, setFieldValue } = useFormik({
        initialValues: {
            date: new Date().toISOString().split('T')[0],
            time: '',
            occasion: 'Birthday',
            guests: 1,
        },

        onSubmit: values => {
            submitBooking(values)
        },
        validate: validateBooking
    });

    useEffect(() => {
        setFieldValue('time', availableTimes[0])
    }, [availableTimes, setFieldValue])

    return (
        <form onSubmit={handleSubmit} >
            <label htmlFor="res-date">Choose date</label>
            <input className={errors.date ? 'error' : ''} required min={new Date().toISOString().split('T')[0]} type="date" id="res-date" name="date" value={values.date} onChange={handleDateChange} />
            {errors.date ? <div className="error">{errors.date}</div> : null}
            <label htmlFor="res-time" >Choose time</label>
            <select id="res-time" name="time" required value={values.time} onChange={handleChange}>
                {availableTimes.map(availableTime => (
                    <option key={availableTime} value={availableTime}>{availableTime}</option>
                ))}
            </select>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" required name="occasion" value={values.occasion} onChange={handleChange}>
                <option value={'Birthday'}>Birthday</option>
                <option value={'Anniversary'}>Anniversary</option>
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input className={errors.guests ? 'error' : ''} required name="guests" type="number" placeholder="1" min="1" max="10" id="guests" value={values.guests} onChange={handleChange} />
            {errors.guests ? <div className="error">{errors.guests}</div> : null}
            <input type="submit" className="button" value="Make Your reservation" />
        </form>
    )
}

export default BookingForm;
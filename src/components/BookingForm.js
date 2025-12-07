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
            <input
                className={errors.date ? 'error' : ''}
                required
                aria-required="true"
                min={new Date().toISOString().split('T')[0]}
                type="date"
                id="res-date"
                name="date"
                value={values.date}
                onChange={handleDateChange}
                aria-describedby={errors.date ? 'date-error' : undefined}
            />
            {errors.date ? <div id="date-error" className="error">{errors.date}</div> : null}
            <label htmlFor="res-time" >Choose time</label>
            <select
                id="res-time"
                name="time"
                required
                value={values.time}
                aria-required="true"
                aria-describedby={errors.time ? 'time-error' : undefined}
                onChange={handleChange}
            >
                {availableTimes.map(availableTime => (
                    <option key={availableTime} value={availableTime}>{availableTime}</option>
                ))}
            </select>
            {errors.time ? <div id="time-error" className="error">{errors.time}</div> : null}
            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                required
                aria-required="true"
                name="occasion"
                value={values.occasion}
                onChange={handleChange}
                aria-describedby={errors.time ? 'occasion-error' : undefined}
            >
                <option value={'Birthday'}>Birthday</option>
                <option value={'Anniversary'}>Anniversary</option>
            </select>
            {errors.occasion ? <div id="occasion-error" className="error">{errors.occasion}</div> : null}
            <label htmlFor="guests">Number of guests</label>
            <input
                className={errors.guests ? 'error' : ''}
                required
                aria-required="true"
                name="guests"
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                value={values.guests}
                onChange={handleChange}
                aria-describedby={errors.time ? 'guests-error' : undefined}
            />
            {errors.guests ? <div id="guests-error" className="error">{errors.guests}</div> : null}
            <input
                type="submit"
                className="button"
                value="Make Your reservation"
                aria-label="On Click"
            />
        </form>
    )
}

export default BookingForm;
import { useFormik } from "formik";
import { useEffect } from "react";

const validate = values => {
    const today = new Date()
    today.setHours(0)
    today.setMinutes(0)
    today.setSeconds(0)
    today.setMilliseconds(0)
    const errors = {};
    if (!values.date) {
        errors.date = 'Required';
    } else if (new Date(values.date) < today) {
        errors.date = 'Must not be a date in the past';
    }

    if (values.guests > 10) {
        errors.guests = 'Must be less than or equal to 10 guests';
    }

    return errors;

};

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
        validate
    });

    useEffect(() => {
        setFieldValue('time', availableTimes[0])
    }, [availableTimes, setFieldValue])

    return (
        <form onSubmit={handleSubmit} >
            <label htmlFor="res-date">Choose date</label>
            <input className={errors.date ? 'error' : ''} type="date" id="res-date" name="date" value={values.date} onChange={handleDateChange} />
            {errors.date ? <div className="error">{errors.date}</div> : null}
            <label htmlFor="res-time" >Choose time</label>
            <select id="res-time" name="time" value={values.time} onChange={handleChange}>
                {availableTimes.map(availableTime => (
                    <option key={availableTime} value={availableTime}>{availableTime}</option>
                ))}
            </select>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" name="occasion" value={values.occasion} onChange={handleChange}>
                <option value={'Birthday'}>Birthday</option>
                <option value={'Anniversary'}>Anniversary</option>
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input className={errors.guests ? 'error' : ''} name="guests" type="number" placeholder="1" min="1" max="10" id="guests" value={values.guests} onChange={handleChange} />
            {errors.guests ? <div className="error">{errors.guests}</div> : null}
            <input type="submit" className="button" value="Make Your reservation" />
        </form>
    )
}

export default BookingForm;
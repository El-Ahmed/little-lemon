export const validateBooking = values => {
    const today = new Date()
    today.setHours(0, 0, 0, 0);

    const errors = {};
    if (!values.date) {
        errors.date = 'Date is required';
    } else if (new Date(values.date) < today) {
        errors.date = 'Must not be a date in the past';
    }

    if (!values.time) {
        errors.time = 'Time is required';
    }
    if (!values.occasion) {
        errors.occasion = 'Occasion is required';
    }

    if (values.guests !== 0 && !values.guests) {
        errors.guests = 'Number of guests is required';
    } else if (values.guests < 1) {
        errors.guests = 'Must be at least 1 guest';
    } if (values.guests > 10) {
        errors.guests = 'Must be less than or equal to 10 guests';
    }

    return errors;

};


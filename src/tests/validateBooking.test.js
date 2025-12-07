import { validateBooking } from "../utils/validateBooking";

test('returns no errors for valid values', () => {

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1)
    const values = {
        date: tomorrow.toISOString().split('T')[0],
        time: '18:00',
        occasion: 'Birthday',
        guests: 5,
    };

    expect(validateBooking(values)).toEqual({});
});

test('returns errors if fields are empty', () => {
    const values = {
        date: '',
        time: '',
        occasion: '',
        guests: '',
    };

    const errors = validateBooking(values);

    expect(errors.date).toBe('Date is required');
    expect(errors.time).toBe('Time is required');
    expect(errors.occasion).toBe('Occasion is required');
    expect(errors.guests).toBe('Number of guests is required');
});

test('returns error when date is in the past', () => {

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1)
    const values = { date: yesterday.toISOString().split('T')[0], time: '18:00', occasion: 'Birthday', guests: 3 };

    const errors = validateBooking(values);

    expect(errors.date).toBe('Must not be a date in the past');
});

test('returns error when guests is less than 1', () => {
    const values = { date: '2025-12-10', time: '18:00', occasion: 'Birthday', guests: 0 };

    const errors = validateBooking(values);

    expect(errors.guests).toBe('Must be at least 1 guest');
});

test('returns error when guests is greater than 10', () => {
    const values = { date: '2025-12-10', time: '18:00', occasion: 'Birthday', guests: 15 };

    const errors = validateBooking(values);

    expect(errors.guests).toBe('Must be less than or equal to 10 guests');
});


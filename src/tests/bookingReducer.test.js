import { initializeTimes, updateTimes } from "../utils/bookingReducer";

test('initializeTimes returns correct initial times', () => {
    jest.useFakeTimers()
    jest.setSystemTime(new Date('2025-12-06'));
    const times = initializeTimes();
    expect(times).toEqual([
        "17:00",
        "17:30",
        '20:00',
        '20:30',
        "22:30",
        "23:00",
        "23:30",
    ]);
});

test('updateTimes returns correct times when date changes', () => {
    const initialTimes = [
        "17:00",
        "17:30",
        '20:00',
        '20:30',
        "22:30",
        "23:00",
        "23:30",
    ]

    const expectedTimes = [
        "17:00",
        "17:30",
        "19:00",
        "22:30",
        "23:00",
        "23:30"
    ]

    const newState = updateTimes(initialTimes, { date: '2025-12-07' });
    expect(newState).toEqual(expectedTimes);
});

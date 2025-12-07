import { initializeTimes, updateTimes } from "../utils/bookingReducer";

test('initializeTimes returns correct initial times', () => {
    const times = initializeTimes();
    expect(times).toEqual([]);
});

test('updateTimes returns correct times when date changes', () => {
    const newState = updateTimes([], { date: '2025-12-07' });
    expect(newState).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
});

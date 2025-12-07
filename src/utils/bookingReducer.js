export function updateTimes(state, action) {
    if (action.date) {
        return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    }
    return state
}


export function initializeTimes() {
    return []
}
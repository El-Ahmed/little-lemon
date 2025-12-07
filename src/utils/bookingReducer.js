import { fetchAPI } from "./Api";

export function updateTimes(state, action) {
    try {
        return fetchAPI(new Date(action.date));
    }
    catch {
        return []
    }
}


export function initializeTimes() {
    try {
        return fetchAPI(new Date())
    }
    catch {
        return []
    }
}
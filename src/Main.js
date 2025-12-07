import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import { useReducer } from "react";

function updateTimes(state, action) {
  if (action.date) {
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  }
  return state
}


function initializeTimes() {
  return []
}

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, undefined, initializeTimes);
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />}></Route>
      </Routes>
    </main>
  );
}

export default Main;

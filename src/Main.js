import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import { useReducer } from "react";
import { initializeTimes, updateTimes } from "./utils/bookingReducer";

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

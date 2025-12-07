import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import { useReducer } from "react";
import { initializeTimes, updateTimes } from "./utils/bookingReducer";
import ConfirmationPage from "./pages/ConfirmationPage";
import { submitAPI } from "./utils/Api";

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, undefined, initializeTimes);
  const navigate = useNavigate();
  const confirmBooking = (bookingForm) => {
    const result = submitAPI(bookingForm);
    if (result) {
      localStorage.setItem('confirmedForm', JSON.stringify(bookingForm));
      navigate('/booking-confirmation')
    }
  }
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitBooking={confirmBooking} />}></Route>
        <Route path="/booking-confirmation" element={<ConfirmationPage />}></Route>
      </Routes>
    </main>
  );
}

export default Main;

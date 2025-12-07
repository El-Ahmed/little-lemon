import { render, screen, waitFor } from "@testing-library/react";
import BookingForm from "../components/BookingForm";

test('Renders the Choose date label', async () => {
    render(<BookingForm availableTimes={[]} dispatch={() => { }} submitBooking={() => { }} />);
    await waitFor(() => {
        const labeElement = screen.getByText("Choose date");
        expect(labeElement).toBeInTheDocument();
    })
});

test('Renders the Choose date label', async () => {
    render(<BookingForm availableTimes={[]} dispatch={() => { }} submitBooking={() => { }} />);
    await waitFor(() => {
        const labeElement = screen.getByText("Choose date");
        expect(labeElement).toBeInTheDocument();
    })
});

test('date input has required and type=date', async () => {
    render(<BookingForm availableTimes={[]} dispatch={() => { }} submitBooking={() => { }} />);
    await waitFor(() => {
        const dateInput = screen.getByLabelText(/choose date/i);

        expect(dateInput).toHaveAttribute('required');
        expect(dateInput).toHaveAttribute('type', 'date');
    })
});

test('time is required', async () => {
    render(<BookingForm availableTimes={[]} dispatch={() => { }} submitBooking={() => { }} />);
    await waitFor(() => {
        const timeSelect = screen.getByLabelText(/choose time/i);

        expect(timeSelect).toHaveAttribute('required');
    })
});

test('occasion is required', async () => {
    render(<BookingForm availableTimes={[]} dispatch={() => { }} submitBooking={() => { }} />);
    await waitFor(() => {
        const occasionSelect = screen.getByLabelText(/occasion/i);

        expect(occasionSelect).toHaveAttribute('required');
    })
});

test('guests input has min and max', async () => {
    render(<BookingForm availableTimes={[]} dispatch={() => { }} submitBooking={() => { }} />);
    await waitFor(() => {
        const guestsInput = screen.getByLabelText(/number of guests/i);

        expect(guestsInput).toHaveAttribute('required');
        expect(guestsInput).toHaveAttribute('min', '1');
        expect(guestsInput).toHaveAttribute('max', '10');
    })
});

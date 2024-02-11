import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={['10:00', '11:00']} />);
    const headingElement = screen.getByText("Book Now");
    // const headingElement = screen.getByText("BookingForm");
    expect(headingElement).toBeInTheDocument();
})
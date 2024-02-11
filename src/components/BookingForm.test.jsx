import { render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import BookingForm from './BookingForm';
import * as api from '../utils/fakeApi';

jest.mock('../utils/fakeApi', () => ({
    ...jest.requireActual('../utils/fakeApi'),
    updateTimes: jest.fn(),
}));

test('Renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={['10:00', '11:00']} />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})

test('Updates available times when date changes', async () => {
    const mockTimes = ['17:00', '17:30', '18:00'];
    api.updateTimes.mockResolvedValue(mockTimes);

    const dispatchMock = jest.fn();

    render(<BookingForm availableTimes={['10:00', '11:00']} dispatch={dispatchMock} />);

    const dateInput = screen.getByLabelText("Choose date");
    await userEvent.type(dateInput, '2044-03-11');

    await waitFor(() => {
        expect(api.updateTimes).toHaveBeenCalled();
        expect(dispatchMock).toHaveBeenCalledWith({ type: 'SET_TIMES', payload: mockTimes });
    });

    expect(dispatchMock).toHaveBeenCalledWith({ type: 'SET_TIMES', payload: mockTimes });
});

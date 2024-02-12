import {render, screen, waitFor} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import BookingForm from './BookingForm';
import * as api from '../utils/fakeApi';

jest.mock('../utils/fakeApi', () => ({
    ...jest.requireActual('../utils/fakeApi'),
    updateTimes: jest.fn(),
}));

test('Renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={['10:00', '11:00']}/>);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})

test('Updates available times when date changes', async () => {
    const mockTimes = ['17:00', '17:30', '18:00'];
    api.updateTimes.mockResolvedValue(mockTimes);

    const dispatchMock = jest.fn();

    render(<BookingForm availableTimes={['10:00', '11:00']} dispatch={dispatchMock}/>);

    const dateInput = screen.getByLabelText("Choose date");
    await userEvent.type(dateInput, '2044-03-11');

    await waitFor(() => {
        expect(api.updateTimes).toHaveBeenCalled();
        expect(dispatchMock).toHaveBeenCalledWith({type: 'SET_TIMES', payload: mockTimes});
    });

    expect(dispatchMock).toHaveBeenCalledWith({type: 'SET_TIMES', payload: mockTimes});
});

describe('BookingForm HTML5 Validation', () => {
    const availableTimes = ['10:00', '11:00', '12:00'];

    test('date input has correct type', () => {
        render(<BookingForm availableTimes={availableTimes}/>);
        const dateInput = screen.getByLabelText(/choose date/i);
        expect(dateInput).toHaveAttribute('type', 'date');
    });

    test('guests input has correct min and max values', () => {
        render(<BookingForm availableTimes={availableTimes}/>);
        const guestsInput = screen.getByLabelText(/number of guests/i);
        expect(guestsInput).toHaveAttribute('min', '1');
        expect(guestsInput).toHaveAttribute('max', '10');
    });

    test('occasion select is required', () => {
        render(<BookingForm availableTimes={availableTimes}/>);
        const occasionSelect = screen.getByLabelText(/occasion/i);
        expect(occasionSelect).toBeRequired();
    });

    test('time select is required', () => {
        render(<BookingForm availableTimes={availableTimes}/>);
        const timeSelect = screen.getByLabelText(/choose time/i);
        expect(timeSelect).toBeRequired();
    });
});

describe('BookingForm Client-side Validation', () => {
    test('submit button is disabled when form is invalid', async () => {
        render(<BookingForm availableTimes={['10:00', '11:00']}/>);
        await waitFor(() => {
            const submitButton = screen.getByDisplayValue(/Make Your reservation/i);
            expect(submitButton).toBeDisabled();
        });
    });

    test('submit button is enabled when form is valid', async () => {
        const mockDispatch = jest.fn();
        const mockSubmitForm = jest.fn();

        render(
            <BookingForm
                availableTimes={['10:00', '11:00']}
                dispatch={mockDispatch}
                submitForm={mockSubmitForm}
            />
        );

        const dateInput = screen.getByLabelText(/choose date/i);
        const timeSelect = screen.getByLabelText(/choose time/i);
        const guestsInput = screen.getByLabelText(/number of guests/i);
        const occasionSelect = screen.getByLabelText(/occasion/i);

        await userEvent.type(dateInput, '2023-04-22');
        await userEvent.selectOptions(timeSelect, ['10:00']);
        await userEvent.type(guestsInput, '2');
        await userEvent.selectOptions(occasionSelect, 'Birthday');

        await waitFor(() => {
            const submitButton = screen.getByDisplayValue(/Make Your reservation/i);
            console.log(submitButton)

            expect(submitButton).not.toBeDisabled();
        });
    });
});

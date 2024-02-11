import { initializeTimes, updateTimes } from './Main';

import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Импортируем MemoryRouter
import Main from './Main';
import * as api from '../utils/fakeApi';

jest.mock('../utils/fakeApi', () => ({
    initializeTimes: jest.fn(),
}));

test('initializes times on component mount', async () => {
    const mockTimes = ['17:00', '17:30', '18:00'];
    api.initializeTimes.mockResolvedValue(mockTimes);

    render(
        <MemoryRouter>
            <Main />
        </MemoryRouter>
    );

    await waitFor(() => {
        expect(api.initializeTimes).toHaveBeenCalled();
    });
});









describe('initializeTimes', () => {
    test('returns the correct initial times', () => {
        const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
        expect(initializeTimes()).toEqual(expectedTimes);
    });
});

describe('updateTimes', () => {
    const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

    test('returns the same state for unhandled action types', () => {
        const action = { type: 'SOME_OTHER_ACTION' };
        expect(updateTimes(initialState, action)).toEqual(initialState);
    });

    test('returns last two times for UPDATE_TIMES action', () => {
        const action = { type: 'UPDATE_TIMES' };
        const expectedState = ['21:00', '22:00'];
        expect(updateTimes(initialState, action)).toEqual(expectedState);
    });
});

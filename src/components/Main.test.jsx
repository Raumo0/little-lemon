import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
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

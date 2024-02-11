import { initializeTimes, updateTimes } from './Main';

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

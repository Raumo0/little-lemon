import * as api from './fakeApi';

describe('fakeApi utilities', () => {
    test('fetchAPI returns times based on the provided date', () => {
        const date = new Date('2024-01-01');
        const times = api.fetchAPI(date);
        expect(times).toContain("--- Select a Time ---");
        expect(times.length).toBeGreaterThan(1);
    });

    test('submitAPI returns true', () => {
        const result = api.submitAPI({date: '2024-01-01', time: '10:00', guests: 2, occasion: 'Birthday'});
        expect(result).toBe(true);
    });

    test('initializeTimes returns times for the current date', async () => {
        const times = await api.initializeTimes();
        expect(times).toContain("--- Select a Time ---");
        expect(times.length).toBeGreaterThan(1);
    });

    test('returns a list of times based on a specific date', async () => {
        const date = new Date(2024, 1, 1);
        const times = await api.updateTimes(date);
        expect(Array.isArray(times)).toBe(true);
        expect(times[0]).toBe("--- Select a Time ---");
        expect(times.length).toBeGreaterThan(1);
    });

    // test('calls fetchAPI with the correct date', async () => {
    //     jest.spyOn(api, 'fetchAPI').mockResolvedValue(["--- Select a Time ---", "17:00", "18:00"]);
    //
    //     const date = new Date(2020, 1, 1);
    //     const times = await api.updateTimes(date);
    //
    //     expect(api.fetchAPI).toHaveBeenCalledTimes(1);
    //     expect(api.fetchAPI).toHaveBeenCalledWith(date);
    //
    //     expect(Array.isArray(times)).toBe(true);
    //     expect(times[0]).toBe("--- Select a Time ---");
    //     expect(times.length).toBeGreaterThan(1);
    //
    //     jest.restoreAllMocks();
    // });
});

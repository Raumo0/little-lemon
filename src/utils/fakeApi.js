const seededRandom = (seed) => {
    let s = seed;
    return function() {
        s = (s * 16807) % 2147483647;
        return (s & 0x7fffffff) / 0x7fffffff;
    };
};

export const fetchAPI = (date) => {
    const daySeed = date.getDate() + date.getMonth() * 30 + date.getFullYear();
    const random = seededRandom(daySeed);
    const times = ["--- Select a Time ---"];

    for (let hour = 17; hour <= 22; hour++) {
        if (random() < 0.5) times.push(`${hour}:00`);
        if (random() < 0.5) times.push(`${hour}:30`);
    }

    return times;
};

export const submitAPI = (formData) => {
    console.log('Form submitted:', formData);
    return true; // Simulate successful submission
};

export const initializeTimes = async () => {
    return fetchAPI(new Date());
};

export const updateTimes = async (date) => {
    return fetchAPI(date);
};
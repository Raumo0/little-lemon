import React, { useState } from 'react';

function BookingForm(props) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('');

    const handleDateChange = (event) => {
        props.dispatch({ type: 'UPDATE_TIMES', payload: event.target.value });
    };
    const handleTimeChange = (event) => setTime(event.target.value);
    const handleGuestsChange = (event) => setGuests(event.target.value);
    const handleOccasionChange = (event) => setOccasion(event.target.value);

    return (
        <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
            <h3>Book Now</h3>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={handleDateChange} />

            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={time} onChange={handleTimeChange}>
                {props.availableTimes.map((availableTime) => (
                    <option key={availableTime} value={availableTime}>{availableTime}</option>
                ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={handleGuestsChange} />

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={handleOccasionChange}>
                <option value="">Please select</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>

            <input type="submit" value="Make Your reservation" />
        </form>
    );
}

export default BookingForm;

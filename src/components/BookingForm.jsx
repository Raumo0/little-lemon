import React, {useEffect, useState} from 'react';
import {updateTimes} from "../utils/fakeApi";

function BookingForm(props) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    const handleDateChange = async (event) => {
        setDate(event.target.value);
        const newDate = new Date(event.target.value);
        const updatedTimes = await updateTimes(newDate);
        props.dispatch({type: 'SET_TIMES', payload: updatedTimes});
    };
    const handleTimeChange = (event) => setTime(event.target.value);
    const handleGuestsChange = (event) => setGuests(event.target.value);
    const handleOccasionChange = (event) => setOccasion(event.target.value);
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
            date,
            time,
            guests,
            occasion,
        };
        props.submitForm(formData);
    };
    useEffect(() => {
        const validateForm = () => {
            return date && time && time !== '--- Select a Time ---' && (guests > 0) && occasion;
        };

        setIsFormValid(validateForm());
    }, [date, time, guests, occasion]);

    return (
        <form style={{display: 'grid', maxWidth: '200px', gap: '20px'}} onSubmit={handleSubmit}>
            <h3>Book Now</h3>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={handleDateChange}/>

            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={time} onChange={handleTimeChange} required>
                {props.availableTimes.map((availableTime) => (
                    <option key={availableTime} value={availableTime}>{availableTime}</option>
                ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests}
                   onChange={handleGuestsChange}/>

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={handleOccasionChange} required>
                <option value="">Please select</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>

            <input type="submit" value="Make Your reservation" disabled={!isFormValid}/>
        </form>
    );
}

export default BookingForm;

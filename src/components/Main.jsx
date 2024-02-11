import React, {useEffect, useReducer} from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import {HomePage} from "./HomePage";
import {BookingPage} from "./BookingPage";
import {initializeTimes, submitAPI} from "../utils/fakeApi";
import {ConfirmedBooking} from "./ConfirmedBooking";

const timesReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TIMES':
            return action.payload;
        default:
            return state;
    }
};

function Main() {
    const [availableTimes, dispatch] = useReducer(timesReducer, []);
    const navigate = useNavigate();

    useEffect(() => {
        const init = async () => {
            const initialTimes = await initializeTimes();
            dispatch({ type: 'SET_TIMES', payload: initialTimes });
        };
        init();
    }, []);

    const submitForm = async (formData) => {
        const isSuccess = submitAPI(formData);
        if (isSuccess) {
            navigate('/confirmed-booking');
        }
    };

    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>} />
                <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
            </Routes>
        </main>
    );
}

export default Main;

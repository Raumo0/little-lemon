import React, {useEffect, useReducer} from "react";
import { Route, Routes } from "react-router-dom";
import {HomePage} from "./HomePage";
import {BookingPage} from "./BookingPage";
import {initializeTimes} from "../utils/fakeApi";

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

    useEffect(() => {
        const init = async () => {
            const initialTimes = await initializeTimes();
            dispatch({ type: 'SET_TIMES', payload: initialTimes });
        };
        init();
    }, []);

    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />} />
            </Routes>
        </main>
    );
}

export default Main;

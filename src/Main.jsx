import React, {useReducer} from "react";
import { Route, Routes } from "react-router-dom";
import {HomePage} from "./HomePage";
import {BookingPage} from "./BookingPage";

const initializeTimes = () => {
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

const updateTimes = (state, action) => {
    //todo: change time by day
    switch (action.type) {
        case 'UPDATE_TIMES':
            return state.slice(-2);
        default:
            return state;
    }
};

function Main() {
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

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

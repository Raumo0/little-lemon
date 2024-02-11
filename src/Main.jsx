import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./HomePage";
import {BookingPage} from "./BookingPage";

export class Main extends Component {
    render() {
        return <main>
            Home page
            <Routes>
                <Route path="/" element={<HomePage/>}>Here home page</Route>
                <Route path="/booking" element={<BookingPage/>}>Here booking page</Route>
            </Routes>
        </main>;
    }
}
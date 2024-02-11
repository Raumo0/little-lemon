import BookingForm from "./BookingForm";


export function BookingPage(props) {
    return (
        <>
            <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch}/>
        </>
    );
}
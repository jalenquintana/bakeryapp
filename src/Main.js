import Homepage from './Homepage';
import BookingForm from './BookingForm';
import ConfirmedBooking from './ConfirmedBooking';

import { Routes, Route, useNavigate } from 'react-router-dom';
import {useReducer} from "react"

const Main = () =>{
    const submit = function(formData) {
        return true;
    };

    let date = new Date;

    const updateTimes = (availableTimes, action) => {
        availableTimes = ["10:00", "11:00", "12:00", "1:00", "2:00"]
        return availableTimes
    }

    const initializeTimes=[""]
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes)

    const navigate = useNavigate();

    const submitForm = (formData) => {
        if (submit(formData)) navigate("/confirmed")
    }

    return(
        <main>
            <Routes>
                <Route path = "/" element={<Homepage/>}/>
                <Route path = "/booking" element={<BookingForm timeOptions={availableTimes} changeTimeOptions={dispatch} isSubmitted = {submitForm}/>}/>
                <Route path = "/confirmed" element={<ConfirmedBooking/>}/>
            </Routes>
        </main>
    )
}

export default Main
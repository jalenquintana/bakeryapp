import { useState } from "react";

const BookingForm = (props) => {
    const [date, setDate] = useState("")
    const [selectedTime, setSelectedTime] = useState("")
    const [quantity, setQuanitity] = useState("")
    const [occasion, setOccasion] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        setDate("");
        setSelectedTime("");
        setQuanitity("");
        setOccasion("");
        props.isSubmitted("")
        console.log("submission successful!");
    };

    const dateChanged = (e) =>{
        setDate(e.target.value)
        props.changeTimeOptions({type: e})
    }

    return(
        <form style={{display: 'grid', maxWidth: '200px', gap: '20px'}} onSubmit={handleSubmit}>
            <label htmlFor="res-date">Please select a delivery date:</label>
            <input type="date" id="res-date" value={date} onChange={e=>dateChanged(e)} required/>
            <label htmlFor="res-time">Please select a delivery time:</label>
            <select id="res-time " value={selectedTime} onChange={e=>setSelectedTime(e.target.value)} required aria-label="On Click">
                <option value = "">Available Times</option>
                {props.timeOptions.map ((hour)=>(
                    <option value={hour}>{hour}</option>
                ))
                }
            </select>
            <label htmlFor="quantity">How many cupcakes wouldyou like to order?</label>
            <input type="number" placeholder={1} min={1} max={10} id="quanitity" value={quantity} onChange={e=>setQuanitity(e.target.value)} required/>
            <label htmlFor="occasion">What is the occasion?</label>
            <select id="occasion" value={occasion} onChange={e=>setOccasion(e.target.value)}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" defaultValue="Make Your reservation" />
      </form>
    )
}

export default BookingForm

//
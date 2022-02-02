import React from "react"
import './App.css';

import Counter from './Counter'
import Quote from './Quote'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { LocalizationProvider, MobileDatePicker, MobileTimePicker } from "@mui/lab";
import { TextField } from "@mui/material";

function App() {

  const [date, setDate] = React.useState(new Date());
  const [hours, setHours] = React.useState(0)

  return (
    <div className="App">
      <h1 className="title text-shadow">get your estimate</h1>
      
      <div className="selector-container">
        <LocalizationProvider dateAdapter={AdapterDateFns}>

          <div className="date-wrapper">
            <h2 className="text-shadow">date</h2>
            <MobileDatePicker
              className="date"
              value={date}
              onChange={(newDate) => {setDate(newDate);}}
              renderInput={(params) => <TextField {...params} />}
              minDate={new Date()}
              orientation="portrait"
            />
          </div>

          <div className="time-wrapper">
            <h2 className="text-shadow">time</h2>
            <MobileTimePicker 
                className="time"
                value={date}
                onChange={(newDate) => {setDate(newDate);}}
                renderInput={(params) => <TextField {...params} />}
                minTime={new Date()}
                orientation="portrait"
            />
          </div>

        </LocalizationProvider>
      </div>

      <Counter hours={hours} setter={setHours} />
      <Quote date={date} hours={hours}/>
    </div>
  );
}

export default App;

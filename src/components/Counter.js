import { set } from "date-fns"
import React from "react"
import './Counter.css'

export default function Counter(props) {

    const increment = 0.5;

    function add() {
        props.setter(prevHours => {
            if (prevHours === 12) {  // Cap of 12 hours
                return prevHours
            } else {
                return prevHours + increment
            }
        })
    }

    function subtract() {
        props.setter(prevHours => {
            if (prevHours === 0) {  // Can't go below  0
                return prevHours
            } else {
                return prevHours - increment
            }
        })
    }

    return (
        <div className="counter">

            <h2 className="counter-title text-shadow">hours</h2>

            <div className="tool">
                <div className="minus ui-shadow" onClick={subtract}>
                    <h2 className="text-shadow">-</h2>
                </div>
                <div className="hours ui-shadow">
                    <h2>{props.hours}</h2>
                </div>
                <div className="plus ui-shadow" onClick={add}>
                    <h2 className="text-shadow">+</h2>
                </div>
            </div>
        </div>
    )

}
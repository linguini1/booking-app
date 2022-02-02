import React from "react"
import "./Quote.css"

export default function Quote(props) {

    function getPrice(date, hours) {
        const weekdayPrice = 100;
        const weekendPrice = 150;
        const endDate = new Date(date.getTime() + hours * 3600000);

        if (date.getDay() === endDate.getDay()) { // Start and end of booking fall on the same day

            console.log("same");
            
            if (date.getDay() === 6 || date.getDay() === 0) {  // Day is a weekend
                return weekendPrice * hours
            } else {
                return weekdayPrice * hours
            }
        } else { // Start and end of booking are on different days

            const timeOnEndDay = endDate.getHours() + endDate.getMinutes() / 60; // Total hours into the end day
            const timeOnStartDay = hours - timeOnEndDay; // Remaining time is on the start day
            let price;

            // Add price for end day
            if (endDate.getDay() === 6 || endDate.getDay() === 0) { // End day is weekend
                price = timeOnEndDay * weekendPrice;
            } else {  // End day is weekday
                price = timeOnEndDay * weekdayPrice;
            }

            // Add price for start day
            if (date.getDay() === 6 || date.getDay() === 0) {  // Start day is weekend
                price = price + (timeOnStartDay * weekendPrice);
            } else { // Start day is weekday
                price = price + (timeOnStartDay * weekdayPrice);
            }

            return price

        }
    }

    const price = getPrice(props.date, props.hours);

    return (
        <div className="quote ui-shadow">
            <h1 className="icon text-shadow">$</h1>
            <h2 className="text-shadow">{price === 0 ? "no estimate": price.toFixed(2)}</h2>
        </div>
    )

}
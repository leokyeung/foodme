import React from "react";
import './style.css';

var TotalCalories = (props) => {

    const total = props.list.reduce(
        (total, array) => total + array.calories,
        0
    );

    const totalCal = props.dailyCal;
    const percent = Math.floor(100*(total/totalCal));

    return (
        <div>
            <h2 className="foodheading">Total calories consumed: {total}</h2>
            <h2 className="foodheading">You have already met {percent}% of {totalCal} calories</h2>
        </div>
    )


}

export default TotalCalories

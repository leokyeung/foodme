import React from "react";
import './style.css';

var TotalCalories = (props) => {

    const total = props.list.reduce(
        (total, array) => total + array.calories,
        0
    );

    return (
        <div>
            <h2 className="foodheading">You already ate this much calories: {total}</h2>
        </div>
    )


}

export default TotalCalories

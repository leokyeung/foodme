import React from "react";

var Calories = (props) => (

    <div className="showCalories">
        <h1>Results for {props.results.food_name}</h1>
        Calories for : {props.results.nf_calories} <br/>
        Protein: {props.results.nf_protein} <br/>
        Sugar: {props.results.nf_sugars} <br/>
        Carbohydrate: {props.results.nf_total_carbohydrate} <br/>

        <button id="addFood" onClick={props.addFood}>Add food</button>
    </div>
)

export default Calories
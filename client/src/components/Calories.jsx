import React from "react";

var Calories = (props) => (

    <div className="showCalories">
        <h1>Results for {props.results.nix_item_name}</h1>
        Calories for : {props.results.nf_calories} <br/>
        Protein: {props.results.nf_protein} <br/>
        Sugar: {props.results.nf_sugars} <br/>
        Carbohydrate: {props.results.nf_total_carbohydrate}
    </div>
)

export default Calories
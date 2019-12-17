import React from "react"
import './style.css';

var Food = (props) => (

<div className="container">
    Food: {props.list.foodName} <br/>
    Calories: {props.list.calories} <br/>

    <button onClick={() => props.removeFood(props.list.id)}> X </button>
    
</div>


)

export default Food
import React from "react"
import './style.css';

var Food = (props) => (

<div className="container">
    Food: {props.list.foodName} <br/>
    Calories: {props.list.calories} 
    
</div>


)

export default Food
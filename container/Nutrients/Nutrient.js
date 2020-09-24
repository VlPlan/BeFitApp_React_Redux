import React from 'react';
import classes from './Nutrient.module.css';

const Nutrient =(props)=>(
    <div className={classes.Nutrient} onClick={()=>props.addNutrient(props.name,props.Carbs, props.Protein, props.Fat,props.Quantity)}>

            <h2>{props.name}</h2>
            <ul>
                <li>Serving size: {props.servingSize}</li>
                <li>Protein: {props.Protein}</li>
                <li>Carbs: {props.Carbs}</li>
                <li>Fat: {props.Fat}</li>
            </ul>
   
    </div>
)

export default Nutrient;
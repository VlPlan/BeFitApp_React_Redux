import React from 'react';
import classes from './DayPlan.module.css'

const DayPlan =(props)=>{

    const nutrients=[];
    const workouts=[];
    for(let i in props.nutrients){
        console.log(i)
        nutrients.push({
            nutrient: i,
            quantity: props.nutrients[i].quantity
         
        })
    }

    for(let i in props.workouts){
        console.log(i)
        workouts.push({
            workout: i,
            reps: props.workouts[i]
        })
    }

    const dailyNutrients = nutrients.map(i=>{
        console.log(i)
        return <span key={i.nutrient}>  {i.nutrient} - {i.quantity}  |</span>
    })

    const dailyWorkouts = workouts.map(i=>{
        console.log(i)
        return <p key={i.workout}>  {i.workout}:{i.reps} reps </p>
    })

    return (
        <div className={classes.DayPlan}>
            <p><strong>Date: {props.day}</strong></p>
            <h4>Workouts:</h4>
            <div className={classes.planBox}>
                {dailyWorkouts}
            </div>
            <h4>Nutrients:</h4>
           <div className={classes.planBox}>
                {dailyNutrients}
           </div>

        </div>
    )
}

export default DayPlan;
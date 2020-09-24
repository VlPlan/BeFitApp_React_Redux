import React from 'react';
import classes from './Workout.module.css'
import {FcAddDatabase} from "react-icons/fc";


const Workout=(props)=>(
    <div className={classes.Workout}>
        <div className={classes.Content}>
            <span>{props.workoutName} <FcAddDatabase className={classes.addWorkout} onClick={()=>props.add(props.workoutName,props.Reps)}/></span>
            
        </div>
        <div className={classes.workoutImage}>
            <img src={props.image} alt={props.image}/>
        </div>
        <div className={classes.workoutInfo}>
            <span><strong>Reps: </strong>{props.Reps}</span>
            <p><strong>How to do it: </strong>{props.Description}</p>

            <p><strong>TIPS: </strong>{props.Tips}</p>
        </div>
       
    </div>
)

export default Workout;
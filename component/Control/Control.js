import React from 'react';
import classes from './Control.module.css'

const Control =(props)=>(
<div className={classes.Control}>
<div className={classes.label}>{props.label}</div>
    <button className={classes.Minus} onClick={props.minus} disabled={props.disabled}>-</button>
    <button className={classes.Plus} onClick={props.add}>+</button>
</div>
);

export default Control
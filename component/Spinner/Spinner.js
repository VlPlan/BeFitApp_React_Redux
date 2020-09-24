import React from 'react';
import classes from './Spinner.module.css'

const Spinner=()=>(
    <div className={classes.Spinner}>
        <div className={classes.spinnerFirst}></div>
        <div className={classes.spinnerSecond}></div>
        <div className={classes.spinnerThird}></div>
        <div className={classes.spinnerFourth}></div>
        <div className={classes.spinnerFifth}></div>
        <div className={classes.spinnerSixth}></div>

    </div>
);

export default Spinner;
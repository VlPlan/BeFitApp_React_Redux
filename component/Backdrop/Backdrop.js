import React from 'react';
import classes from './Backdrop.module.css';
import NavItems from '../Navigation/NavItems/NavItems';


const backdrop=(props)=>(
    props.showModal ? <div className={classes.Backdrop} onClick={props.clicked}>
<NavItems/>
            </div> : null
)
  


export default backdrop;
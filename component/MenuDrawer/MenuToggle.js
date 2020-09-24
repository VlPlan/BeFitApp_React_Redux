import React from 'react';
import classes from './MenuToggle.module.css'

const menuToggle=(props)=>(
<div onClick={props.clickedToggle} className={classes.DrawerToggle}>
  <div></div>
  <div></div>
  <div></div>
    </div>
)

export default menuToggle;
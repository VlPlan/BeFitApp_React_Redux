import React from 'react';
import classes from './Logo.module.css';



const logo =(props)=>(
<div className={classes.Logo} style={{height:props.height}}>
    <h3>BeFit</h3>
</div>
);

export default logo;
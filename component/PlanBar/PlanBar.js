import React from 'react';
import classes from './PlanBar.module.css'
import Aux from '../auxillary';




const PlanBar = (props) =>(

        <Aux>
    <div className={classes.PlanBar} style={{transform:props.show ? 'translateX(0)' : 'translateX(-100vh)', opacity:props.show?'1':'0'}}>
        {props.children}
    </div>
    </Aux>

);


        
    



export default PlanBar;
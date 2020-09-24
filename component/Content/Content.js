import React, {Component} from 'react';
import classes from './Content.module.css';
import stretchImg from './stretchGym.jpg';
import Planner from '../Planner/Planner';

class Content extends Component {



    render(){
        return(
<div className={classes.Content} style={{backgroundImage:`url(${stretchImg})`,backgroundSize:'cover',backgroundRepeat:'no-repeat', opacity:'0.7'}}>
    <div className={classes.text}>
        <div>PLAN</div>
        <div>YOUR</div>
        <div>HEALTHY</div>
        <div>LIFE</div>
       
    </div>
    <Planner /> 
</div>
)
        }
    }

export default Content;
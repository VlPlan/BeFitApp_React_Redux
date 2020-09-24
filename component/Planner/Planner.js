import React,{Component} from 'react';
import classes from './Planner.module.css';
import plannerImg from './planner.jpg';
import Workouts from '../../container/Workouts/Workouts';
import Nutrients from '../../container/Nutrients/Nutrients';
import {Route,Link} from 'react-router-dom';
import WorkoutsBtn from './WorkoutsBtn';
import NutrientsBtn from './NutrientsBtn';


class Planner extends Component{
    state={
        clickedPlanner:'',
        workoutsButton:false,
        nutrientsButton:false,
        planButtons:'none'
    }



    clickedPlanner=()=>{

            this.setState({clickedPlanner:'none',planButtons:'block'})
            console.log(this.state.clickedPlanner)

            

    }


    render(){
        return (
            <div className={classes.Planner}>
                <img src={plannerImg} alt="planner.jpg"/>
                <h2>You're on right track!</h2>
                <Link to='/Workouts'>
                <WorkoutsBtn showBtn={this.state.planButtons} />
                </Link>
                <button style={{display:this.state.clickedPlanner}} onClick={this.clickedPlanner}>Make A Plan</button>
                <Link to='/Nutrients'>
                <NutrientsBtn showBtn={this.state.planButtons}/>
                </Link>
            </div>
        )
    }
}

export default Planner;
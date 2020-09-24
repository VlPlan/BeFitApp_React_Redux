import React, { Component } from 'react';
import classes from './Workouts.module.css';
import shoulder from './shoulder.jpg';
import legs from './legs.jpg';
import chest from './chest.jpg';
import arms from './arms.jpg';
import back from './back.jpg';
import abs from './abs.jpg';
import workouts from '../../workouts.json';
import Workout from '../Workouts/Workout/Workout';
import Plan from '../Plan/Plan';
import PlanBar from '../../component/PlanBar/PlanBar';
import axios from '../../axios';
import * as actionTypes from '../store/actions';
import ErrorHandler from '../../ErrorHandler';
import {connect} from 'react-redux';
import fire from '../../firebase';



export class Workouts extends Component {

    state={
        Workouts:['chest', 'back','arms', 'shoulders', 'legs','abs'],
        showWorkoutsImage:null,
        selectedCategoryWorkouts: [],
        importedWorkoutImages:[],
        planning:false
   


    }

    
showWorkoutImage=(e)=>{

    const category = e.target.text;

    switch(category){
case('chest'):
    this.setState({showWorkoutsImage:<img src={chest} alt='chest.jpg' style={{width:'400px',height:'300px', alignContent:'center'}}/>, selectedCategoryWorkouts:[]});

break;

case('back'):
this.setState({showWorkoutsImage:<img src={back} alt='back.jpg' style={{width:'400px',height:'300px', alignContent:'center'}}/>, selectedCategoryWorkouts:[]})
break;

case('shoulders'):
this.setState({showWorkoutsImage:<img src={shoulder} alt='shoulder.jpg' style={{width:'400px',height:'300px', alignContent:'center'}}/>, selectedCategoryWorkouts:[]})
break;

case('arms'):
this.setState({showWorkoutsImage:<img src={arms} alt='arms.jpg' style={{width:'400px',height:'300px', alignContent:'center'}}/>, selectedCategoryWorkouts:[]})
break;

case('legs'):
this.setState({showWorkoutsImage:<img src={legs} alt='legs.jpg' style={{width:'400px',height:'300px', alignContent:'center'}}/>, selectedCategoryWorkouts:[]})
break;

case('abs'):
this.setState({showWorkoutsImage:<img src={abs} alt='abs.jpg' style={{width:'400px',height:'300px', alignContent:'center'}}/>, selectedCategoryWorkouts:[]})
break;

default:
    this.setState({showWorkoutsImage:null});
    }

    return this.state.showWorkoutsImage;

}
  

categorySelected=(selection)=>{


const selectedWorkout = Object.entries(workouts).filter(category=>category[0] === selection.target.text);

selectedWorkout.map(workout => this.setState({selectedCategoryWorkouts:workout[1], showWorkoutsImage:null}));
console.log(this.state.selectedCategoryWorkouts)


}



showWorkout=(workout)=>{
    let imgSrc=require(`./images/${workout}`);
    return imgSrc;
}

proceedPlan =()=> {
    this.setState({planning:true});
}

declinePlan =()=> {
    this.props.history.push('/checkout');
}

plannerClose =()=> {
    this.setState({planning:false});
}

clearPlan=()=>{
    this.props.plan = null
}

proceedPlanner=(event)=>{
    event.preventDefault();
    console.log(this.props.nutriPlan);
    console.log(this.props.plan);

    const dailyPlan={
    workouts: this.props.plan,
    nutrients: this.props.nutriPlan,
    day: this.props.date,
    user: fire.auth().currentUser.email
    }

axios.post('/plans.json', dailyPlan).then(response=>
{
    this.setState({planning:false})

 this.props.history.push('/');
}).catch(err=>console.log(err)); 
}

    render() {
console.log(this.props.plan)
        let planAdded=null;
        
        if(this.props.plan){
            planAdded=<Plan workouts={this.props.plan} nutrients={this.props.nutriPlan} proceedPlanner={this.proceedPlanner} declinePlanner={this.props.declinePlan} clearPlanner={this.props.clearPlan} remove={(workout,reps)=>this.props.removeWorkout(workout,reps)} removeNutrient={(nutrient,quantity)=>this.props.removeNutrient(nutrient,quantity)} addQuantity={(nutrient,quantity)=>this.props.AddQuantity(nutrient,quantity)} substractQuantity={(nutrient,quantity)=>this.props.SubstractQuantity(nutrient,quantity)} setDate={this.props.setDate} date={this.props.date}/>
        
        }
        return (
            <div>
                <PlanBar show={this.props.planning}>
                    {planAdded}
                </PlanBar>
                <div class={classes.WorkoutsContainer}>
                    {this.state.showWorkoutsImage}
                    <div className={classes.Workouts}>
                    {this.state.selectedCategoryWorkouts.map((workout)=><Workout key={workout.name} add={(workout,reps)=>this.props.workoutAdded(workout,reps)} image={this.showWorkout(workout.image)} workoutName={workout.name} Reps={workout.reps} Description={workout.description} Tips={workout.tips}/>)}
                    </div>
                </div>

                <div className={classes.WorkoutsMenu}>
                   {this.state.Workouts.map(workout => <a key={workout} onMouseOver={(workout)=>this.showWorkoutImage(workout)} onClick={(workout)=>this.categorySelected(workout)} className={classes.WorkoutCategory} href={(workout)=>this.categorySelected(workout)} src={(workout)=>this.categorySelected(workout)}>{workout}</a>)}                
                </div>
    
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        plan:state.workouts,
        planning:state.planCreated,
        nutriPlan:state.nutrients,
        date:state.date
    
    }
}

const mapDispatchToProps = dispatch => {
    return {
        workoutAdded: (workout,reps) => dispatch({type:actionTypes.ADD_WORKOUT, workout:workout, reps:reps }),
        clearPlan: ()=>dispatch({type:actionTypes.CLEAR_PLAN,workout:null,nutrient:null}),
        declinePlan:()=>dispatch({type:actionTypes.ADD_MORE_WORKOUTS}),
        removeWorkout:(workout,reps)=>dispatch({type:actionTypes.REMOVE_WORKOUT, workout:workout,reps:reps}),
        removeNutrient:(nutrient)=>dispatch({type:actionTypes.REMOVE_NUTRIENT, nutrient:nutrient}),
        AddQuantity:(nutrient, quantity)=>dispatch({type:actionTypes.ADD_NUTRIENTQTY, nutrient:nutrient, quantity:quantity}),
        SubstractQuantity:(nutrient, quantity)=>dispatch({type:actionTypes.SUBSTRACT_NUTRIENTQTY, nutrient:nutrient, quantity:quantity}),
        setDate:(date)=>dispatch({type:actionTypes.SET_DATE, date:date})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ErrorHandler(Workouts,axios));

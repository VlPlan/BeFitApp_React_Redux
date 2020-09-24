import React,{Component} from 'react';
import axios from '../../axios';
import classes from './Nutrients.module.css';
import Nutrient from './Nutrient';
import PlanBar from '../../component/PlanBar/PlanBar';
import Plan from '../Plan/Plan';
import * as actionTypes from '../store/actions';
import ErrorHandler from '../../ErrorHandler';
import {connect} from 'react-redux';
import fire from '../../firebase';



class Nutrients extends Component {

    state={
        nutrientCategories:[],
        allNutrients:[],
        selectedCategory:null,
        nutrientsToDisplay:[],
        planning:false,
        date:new Date()
       
    }


    componentDidMount(){

    const axios = require("axios");
    axios({
    "method":"GET",
    "url":"https://fitness-calculator.p.rapidapi.com/macros",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"fitness-calculator.p.rapidapi.com",
    "x-rapidapi-key":"fdfc79f78dmshb5fe473d8b87158p1d04a8jsncc07f333d133",
    "useQueryString":true
    }
    })
    .then((response)=>{
      
      const categoriesArray = [];
      for(let i in response.data){
          categoriesArray.push({...response.data[i],id:i})
      }

    console.log(categoriesArray);
    const selectionCategories = [];
    for(let category in categoriesArray){
        selectionCategories.push(categoriesArray[category].id);
    }
    this.setState({nutrientCategories:selectionCategories,allNutrients: categoriesArray})
console.log(this.state.allNutrients)

    })

    .catch((error)=>{
      console.log(error)
    })

    }    

    
    selectCategory=(e)=>{
        e.preventDefault();
        console.log(e.target.text)
        let nutrientsFromSelectedCategory = null;
        const nutrients = [...this.state.allNutrients];
        
        console.log(nutrients)
      
    nutrientsFromSelectedCategory=nutrients.filter( category => category.id === e.target.text )[0];


  
 console.log(nutrientsFromSelectedCategory)

let array=[];
for(let i in nutrientsFromSelectedCategory){

    console.log(i)
    if(i !== 'id'){
        array.push({
            name:i,
            nutrients:nutrientsFromSelectedCategory[i]
        })
    }

}

this.setState({selectedCategory:nutrientsFromSelectedCategory,nutrientsToDisplay:array})
console.log(this.state.selectedCategory)
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
console.log(dailyPlan)
axios.post('/plans.json', dailyPlan).then(response=>
{
    this.setState({planning:false})
 this.props.history.push('/');
}).catch(err=>console.log(err)); 
}



    render(){

    
        let planAdded=null;
        
        if(this.props.nutriPlan){
            planAdded=<Plan workouts={this.props.plan} nutrients={this.props.nutriPlan} proceedPlanner={this.proceedPlanner} declinePlanner={this.props.declinePlan} clearPlanner={this.props.clearPlan} remove={(workout,reps)=>this.props.removeWorkout(workout,reps)} removeNutrient={(nutrient,quantity)=>this.props.removeNutrient(nutrient,quantity)} addQuantity={(nutrient,quantity)=>this.props.AddQuantity(nutrient,quantity)} substractQuantity={(nutrient,quantity)=>this.props.SubstractQuantity(nutrient,quantity)} setDate={this.props.setDate} date={this.props.date}/>
        
        }

let counter=1;

        return(
<div>
                <PlanBar show={this.props.planning}>
                    {planAdded}
                </PlanBar>
<div>
        {this.state.nutrientCategories.map(r=><div className={classes.CategoryCard} onClick={this.selectCategory}><a src={this.selectCategory} href={this.selectCategory}>{r}</a></div>)}
</div>
<div className={classes.nutritionCards}>
    {this.state.nutrientsToDisplay.map(k=> <Nutrient key={k.name} addNutrient={(k,carbs,protein,fat,quantity)=>this.props.nutrientAdded(k,carbs,protein,fat,quantity)} name={k.name} servingSize={k.nutrients.ServingSize} Fat={k.nutrients.Fat} Carbs={k.nutrients.Carbs} Protein={k.nutrients.Protein} Quantity={counter}/>)}
</div>


</div>
  
        )
    }
}

const mapStateToProps = (state) => {
    return {
        plan:state.workouts,
        nutriPlan:state.nutrients,
        planning:state.planCreated,
        date:state.date
        
      
    
    }
}

const mapDispatchToProps = dispatch => {
    return {
        nutrientAdded: (nutrient,carbs,protein,fat,kcal) => dispatch({type:actionTypes.ADD_NUTRIENT, nutrient:nutrient, carbs:carbs, fat:fat, protein:protein, quantity:1 }),
        clearPlan: ()=>dispatch({type:actionTypes.CLEAR_PLAN,workout:null,nutrient:null}),
        declinePlan:()=>dispatch({type:actionTypes.ADD_MORE_NUTRIENTS}),
        removeNutrient:(nutrient)=>dispatch({type:actionTypes.REMOVE_NUTRIENT, nutrient:nutrient}),
        removeWorkout:(workout,reps)=>dispatch({type:actionTypes.REMOVE_WORKOUT, workout:workout,reps:reps}),
        AddQuantity:(nutrient, quantity)=>dispatch({type:actionTypes.ADD_NUTRIENTQTY, nutrient:nutrient, quantity:quantity}),
        SubstractQuantity:(nutrient, quantity)=>dispatch({type:actionTypes.SUBSTRACT_NUTRIENTQTY, nutrient:nutrient, quantity:quantity}),
        setDate:(date)=>dispatch({type:actionTypes.SET_DATE, date:date})

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ErrorHandler(Nutrients,axios));
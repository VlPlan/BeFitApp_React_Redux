import React, {Component} from 'react'
import Aux from '../../component/auxillary';
import Control from '../../component/Control/Control';
import classes from './Plan.module.css';
import DatePicker from 'react-date-picker';




class Plan extends Component{

   
    render() {


        let workoutsPlanner=null;
        let nutrientsPlanner = null;
        
        if(this.props.workouts){
            workoutsPlanner = Object.keys(this.props.workouts).map(k=> {
                
                return <li style={{display:'flex'}} key={k}> {k}: {this.props.workouts[k]}  <a className={classes.removeBtn} onClick={()=>this.props.remove(k,this.props.workouts[k])} href={()=>this.props.remove(k,this.props.workouts[k])}>x</a></li>
            });
        }
       


        if(this.props.nutrients){
            nutrientsPlanner = Object.keys(this.props.nutrients).map(k=> {
                console.log(k)


                return <li style={{display:'flex'}} key={k}>{k}:  {this.props.nutrients[k].quantity}  <Control key={k} add={()=>this.props.addQuantity(k,this.props.nutrients[k].quantity)} minus={()=>this.props.substractQuantity(k,this.props.nutrients[k].quantity)} disabled={this.props.nutrients[k].quantity<=1 ? true:false}/><a className={classes.removeBtn} onClick={()=>this.props.removeNutrient(k)} href={()=>this.props.removeNutrient(k)}>x</a></li>
            });
        }
     
        let Carbs=[];
        let sumOfCarbs=0;
        let Fat=[];
        let sumOfFat=0;
        let Proteins=[];
        let sumOfProteins=0;
     

        Object.keys(this.props.nutrients).map(key=>{
        
            return this.props.nutrients[key];
        }).reduce((s,el) => {
            
    for(let i in el ){ 
        console.log(el)
        if(i==="carbs"){

    let currentCarbs = parseFloat(el.carbs.replace(el.carbs.substring(el.carbs.length-1),''))*el.quantity
    Carbs.push(currentCarbs)

    let currentFat = parseFloat(el.fat.replace(el.fat.substring(el.fat.length-1),''))*el.quantity
    Fat.push(currentFat)

    let currentProteins = parseFloat(el.protein.replace(el.protein.substring(el.protein.length-1),''))*el.quantity
    Proteins.push(currentProteins)


}     
    }
    
},0 );

for(let i in Carbs){

    sumOfCarbs += Carbs[i];
}

for(let i in Proteins){

    sumOfProteins += Proteins[i];
}

for(let i in Fat){

    sumOfFat += Fat[i];
}

let totalKCal = (Math.round(sumOfFat*100)/100)*9+(Math.round(sumOfProteins*100)/100)*4+(Math.round(sumOfCarbs*100)/100)*4;

        return (
        <div style={{marginBottom:'5px'}} >
            <Aux>
                <h3>DAILY PLAN</h3>
                <p>DAY: <DatePicker onChange={this.props.setDate} value={this.props.date} /> </p>   
                {Object.keys(this.props.workouts).length ? <h5>Workouts added:</h5> : <p style={{border:'2px solid white'}}>No workouts added at the moment!</p>}
                <ul>
                    
                    {workoutsPlanner}
            
                </ul>
                {Object.keys(this.props.nutrients).length ? <h5>Daily nutrients:</h5> : <p style={{border:'2px solid white'}}>No nutrients added at the moment!</p>}
                <ul>                   
                    {nutrientsPlanner}
                </ul>
                <p>FAT - {Math.round(sumOfFat*100)/100}g | PROTEINS - {Math.round(sumOfProteins*100)/100}g | CARBS - {Math.round(sumOfCarbs*100)/100}g</p>
                <p> Total KCal (calories) - {totalKCal} </p>
                <br/>
               
                <p>Proceed?</p>
                <button onClick={this.props.proceedPlanner}>Yes</button>
                <button onClick={this.props.declinePlanner}>Add more</button>
                <button onClick={this.props.clearPlanner}>Clear Plan</button>
                </Aux>
        </div>
     );
        }
    }

    
    export default Plan;

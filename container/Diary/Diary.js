import React,{Component} from 'react';
import DayPlan from './DayPlan/DayPlan';
import axios from '../../axios';
import ErrorHandler from '../../ErrorHandler';
import fire from '../../firebase';


class Diary extends Component{

    state={
        plans:[]
    }

    componentDidMount(){
axios.get('/plans.json').then(r=>{
    console.log(r.data)
    const fetchData=[];
    const username=fire.auth().currentUser.email;

    for(let i in r.data){
        if(username === r.data[i].user){
                 for(let nutrient in r.data[i]) {
                    let totalKCal = (Math.round(nutrient.fat*100)/100)*9+(Math.round(nutrient.protein*100)/100)*4+(Math.round(nutrient.carbs*100)/100)*4;
                     console.log(nutrient)
                 } 
fetchData.push({...r.data[i], id:i});
    }
    this.setState({plans:fetchData});
    console.log(this.state.plans)
    console.log(r.data[i])
}
}).catch(err=>{
   console.log(err)
})
    }

  

    render(){
        return(
            <div>
            {this.state.plans.length ?
            ( 
            this.state.plans.map(o=>(
                <DayPlan 
                key={o.id} 
                nutrients={o.nutrients} 
                workouts={o.workouts}
                day={o.day}
               
                />
            ))
            )
            : (
                <h2 style={{
                    margin:'auto',
                    color:'whitesmoke',
                    fontSize: 'medium',
                    fontWeight: '100',
                    fontFamily:'sans-serif',
                    padding:'10px',
                    position:'center'}}>YOUR DIARY IS EMPTY, ADD SOME PLAN IN IT....</h2>
            )
            }
            </div>
   
       
    
        );
    }
}

export default ErrorHandler(Diary,axios);
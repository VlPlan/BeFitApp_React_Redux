import * as actionTypes from './actions';




const initialState={
    workouts:{},
    nutrients:{},
    planCreated:false,
    date:new Date()

}



const reducer = (state = initialState,action) => {

    let nts = {...state.nutrients};
    let wts = {...state.workouts};
   

    switch(action.type){

        case actionTypes.ADD_WORKOUT:
            return {...state, nutrients:{...state.nutrients}, workouts: {...state.workouts, [action.workout]:action.reps},planCreated:true}
            
            
    case actionTypes.CLEAR_PLAN:
        const user = localStorage.getItem('user');
        console.log(user.data)
        return {...state, workouts:{}, nutrients:{}, planCreated:false}


    case actionTypes.SET_DATE:
            return {...state, date: action.date}



    case actionTypes.ADD_MORE_WORKOUTS:    
            return {...state, planCreated:false}

    case actionTypes.REMOVE_WORKOUT:
   console.log(action.workout)
    
    console.log(wts)
        for(let i in wts){
           if(i === action.workout){
               delete wts[i] 
               console.log(Object.keys(wts).length)   
              
               return {...state, nutrients:{...state.nutrients}, workouts: wts, planCreated: Object.keys(wts).length===0 && Object.keys(nts).length===0? false :true};            
           }
        }
        break;

    case actionTypes.ADD_NUTRIENT:
     
            return {...state, workouts: {...state.workouts}, nutrients: {...state.nutrients,[action.nutrient]:{'carbs':action.carbs,'protein':action.protein,'fat':action.fat, 'quantity':action.quantity} },planCreated:true}

    case actionTypes.ADD_MORE_NUTRIENTS:    
            return {...state, planCreated:false}

    case actionTypes.REMOVE_NUTRIENT:

        for(let n in nts){
           if(n === action.nutrient){
               delete nts[n]         
               return {...state, nutrients:nts, workouts: {...state.workouts}, planCreated: Object.keys(nts).length===0 && Object.keys(wts).length===0 ? false :true};            
           }
        }
        break;

        case actionTypes.ADD_NUTRIENTQTY:
            for(let n in nts){
                if(n === action.nutrient){
                    console.log(nts[n].quantity)
                    nts[n].quantity+=1
                    console.log(nts[n])
            return {...state, workouts: {...state.workouts}, nutrients: nts,planCreated:true}
                }
            }
            break;
        case actionTypes.SUBSTRACT_NUTRIENTQTY:
            for(let n in nts){
                if(n === action.nutrient){
                    console.log(nts[n].quantity)
                    nts[n].quantity-=1
                    console.log(nts[n])
            return {...state, workouts: {...state.workouts}, nutrients: nts,planCreated:true}
                }
            }
            break;

default:
    return state;
    }
};

export default reducer;
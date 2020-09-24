import React,{Component} from 'react'
import classes from './Register.module.css'
import axios from '../../../axios';
import Login from '../Login/Login';
import { Link } from 'react-router-dom';

class Register extends Component{
state={

        username:'',
        password:'',
        name:'',
        surname:'',
        age:''   
}

registerUser=(event)=>{
    event.preventDefault();

    const userDetails={
    name: this.state.name,
    surname: this.state.surname,
    password: this.state.password,
    username: this.state.username,
    age:this.state.age
    }

axios.post('/users.json', userDetails).then(response=>
{
    console.log(userDetails)
    
 this.props.history.push('/');
}).catch(err=>console.log(err)); 
}

    render(){

        return(
            <div>
            <div style={{color:'white'}}>
            <h2><small>Welcome</small> |   BeFit   | <small>Your Healthy Planner </small></h2>
            <p>Sign In or Register</p>
            </div>
            <div className={classes.RegisterForm} style={{marginTop:'60px'}}>
                {/* <form onSubmit={this.registerUser} > */}
    
                    <h3>Registration Form</h3>
                    <div>
                        <label for="name">Name</label>
                        <input type="text" autoFocus required value={this.props.name} onChange={e=> this.props.setName(e.target.value)}/>
                    </div>
                    <div>
                        <label for="surname">Surname</label>
                        <input type="text" autoFocus required value={this.props.surname} onChange={e=> this.props.setSurname(e.target.value)}/>
                    </div>
                    <div>
                        <label for="age">Age</label>
                        <input type="number" autoFocus required value={this.props.age} onChange={e=> this.props.setAge(e.target.value)}/>
                    </div>
                    <div>
                        <label for="email">Email</label>
                        <input type="email" autoFocus required value={this.props.email} onChange={e=> this.props.setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <label for="password">Password</label>
                        <input type="password" autoFocus required value={this.props.password} onChange={e=> this.props.setPassword(e.target.value)}/>
                    </div>
                    
                    {/* <Link to='/'>
                    <a href={Login} className={classes.login}><small>Already registered? Sign in here!</small></a>
                    </Link>
                    <br/>
                    <button>Register</button> */}
                {/* </form> */}
            </div>
            </div>
        )
    }
}


export default Register
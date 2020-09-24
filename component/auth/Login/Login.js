import React,{Component} from 'react'
import classes from './Login.module.css'
import axios from '../../../axios';
import Register from '../Register/Register';
import { Link } from 'react-router-dom';
import UserProfile from '../../../container/UserProfile/UserProfile';

class Login extends Component{
state={
    username:'',
    password:'',
    allUsers:[],
    loggedIn:false

}


// componentDidMount(){
//     axios.get('/users.json').then(userInfo=>{
//         const fetchUsers = [];
//         for(let user in userInfo.data){
//             fetchUsers.push({...userInfo.data[user], id:user});
//         }
//         this.setState({allUsers:fetchUsers})
//     }).catch(error => console.log(error))
   
// }

validateMail =(e)=>{
e.preventDefault()
   if (this.state.username.length > 0 && this.state.password.length > 0){
      this.state.allUsers.findIndex(user => user.username === this.state.username && user.password === this.state.password ? 
            // this.setState({loggedIn:true}) &&
            this.props.history.push('/UserProfile')  &&
            localStorage.setItem("token","userloggedin") && 
            alert(`Successfully logged in as ${user.username}!`)  
         : alert('Not recognized user, or wrong username or password!'));
    
        } else {
        alert('Please insert username and password!')
    }
    
    

}

insertUsername=(e)=>{
    
    this.setState({username:e.target.value})
}

insertPassword=(p)=>{
    
    this.setState({password:p.target.value})
}



    render(){

       
        return(
            
           
            <div style={{color:'white'}}>
            <h2><small>Welcome</small> |   BeFit   | <small>Your Healthy Planner </small></h2>
            <p>Sign In or Register</p>
                {/* <form onSubmit={this.validateMail}> */}

                        {this.props.hasAccount ? 

        
            <div className={classes.LoginForm}>
                {/* <form> */}
                    <div style={{paddingTop:'30px'}}>
                        <label for="email">Email</label>
                        <input type="email" autoFocus required value={this.props.email} onChange={e=> this.props.setEmail(e.target.value)}/>
                        <p>{this.props.emailError}</p>
                        {/* <input type="email" value={this.state.username} onChange={this.insertUsername}/> */}
                    </div>
                    <div>
                        <label for="password">Password</label>
                        <input type="password" autoFocus required value={this.props.password} onChange={e=> this.props.setPassword(e.target.value)}/>
                        <p>{this.props.passwordError}</p>
                    </div>
                            
                    <div>
                                <button onClick={this.props.handleLogin}>Sign in</button>
                                <Link to='/Register'>
                                <a onClick={()=>this.props.setHasAccount(!this.props.hasAccount)} href={()=>this.props.setHasAccount(!this.props.hasAccount)} className={classes.signUp}><small>Not registered? Sign up here!</small></a>
                                </Link>
                    </div>

                    
                           
                </div>
                         
                           :

                                <div className={classes.RegisterForm}>
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
                                <button onClick={this.props.handleSignUp}>Register</button>
                                <Link to='/'>
                                <a onClick={()=>this.props.setHasAccount(!this.props.hasAccount)} href={()=>this.props.setHasAccount(!this.props.hasAccount)} className={classes.login}><small style={{color:'black'}}>Already registered? Sign in here!</small></a>
                                </Link>                              
                                </div>
                            }    
                      </div>
        )
                        }
                    }
                    //      <input type="password" value={this.state.password} onChange={this.insertPassword}/>  
                        
                   
                    //  <Link to='/Register'>
                    // <a href={Register} className={classes.signUp}><small>Not registered? Sign up here!</small></a>
                    // </Link>
                    // <br/>
                    // <button><strong>Login</strong></button>  
               
            
           
        
   



export default Login

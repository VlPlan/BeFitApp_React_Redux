import React,{ useState, useEffect } from 'react';
import classes from './App.module.css';
import UserProfile from './container/UserProfile/UserProfile';
import Login from './component/auth/Login/Login';
import fire from './firebase';






const App =(props)=>{

  const [user,setUser] = useState(null);
  const[email,setEmail] =useState('');
  const[password,setPassword] = useState('');
  const[name,setName] =useState('');
  const[surname,setSurname] =useState('');
  const[age,setAge] =useState('');
  const[emailError,setEmailError]=useState('');
  const[passwordError,setPasswordError] = useState('');
  const [hasAccount,setHasAccount] = useState(false);


  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if(user) {

        clearInputs();
        setUser(user); 
       
      } else {
        setUser('');
      }
  
  })


}

  
  const clearInputs = () => {
    setEmail('');
    setPassword('');
    setName('');
    setSurname('');
    setAge('');
  }
  

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }
  

  const handleLogin = () => {
  
    fire.auth().signInWithEmailAndPassword(email,password)
      .catch(error => {
        switch(error.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(error.message);
            break;
          case  "auth/wrong-password":
            setPasswordError(error.message);
            break;
          default:
        }
      })

    }

  const register = () => {
    clearErrors();
    fire.auth().createUserWithEmailAndPassword(email,password)
    .catch(error => {
      switch(error.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(error.message);
          break;
        case "auth/weak-password": 
          setPasswordError(error.message);
          break; 
        default:
      }
    }
    );

  }

  const logout = () => {
    fire.auth().signOut();
  }

  useEffect(() => {
      authListener()
    }, [])


  return ( 
     
    <div className={classes.App}>
      {
      user ?
      
         (
          <UserProfile handleLogout={logout} username={user.email}/>
         ) 

         : 
         
         ( <Login 
            email={email} 
            setEmail={setEmail} 
            password={password}
            setPassword={setPassword}
            name={name}
            surname={surname}
            age={age}
            setName={setName}
            setSurname={setSurname}
            setAge={setAge}
            handleLogin={handleLogin}
            handleSignUp={register}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            emailError={emailError}
            passwordError={passwordError} />
         )
         
      }
      
           
            

     
    </div>
  );
    }


export default App;

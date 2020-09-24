import React,{Component} from 'react';
import classes from './Toolbar.module.css';
import Logo from '../Logo/Logo';
import MenuToggle from '../MenuDrawer/MenuToggle';





class toolbar extends Component {


    render(){

 return(  
      

<header className={classes.Toolbar}>
    <Logo/>  
<div className={classes.authLinks}>
    <p>Signed in as: {this.props.username}</p>
    <button onClick={this.props.logout} href={this.props.logout}>SIGN OUT</button>    
</div>

<MenuToggle clickedToggle={this.props.menuClicked}/> 
</header>


 )
}
}
export default toolbar;
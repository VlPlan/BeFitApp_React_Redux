import React from 'react';
import Logo from '../Logo/Logo';
import NavItems from '../Navigation/NavItems/NavItems';
import classes from './SideMenu.module.css'
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../auxillary';

const sideMenu =(props)=>{
 let attachedClass = [classes.SideMenu, classes.Close];
    if(props.open){
        attachedClass = [classes.SideMenu, classes.Open];
    }
    return(
        <Aux>
  <Backdrop showModal={props.open} clicked={props.closed}> 
        <div className={attachedClass.join(' ')}>
        <div className={classes.SideMenu}>
            <div className={classes.Logo}>
            <Logo />
            </div>
             <nav>
            <NavItems/>
          </nav> 
        </div>
        </div>
        </Backdrop>
         </Aux>
    );
}


export default sideMenu;
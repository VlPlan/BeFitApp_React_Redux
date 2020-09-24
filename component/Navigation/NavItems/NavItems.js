import React from 'react';
import classes from './NavItems.module.css';
import NavItem from '../NavItem/NavItem';

const navItems = ()=>(
<ul className={classes.NavItems}>
   <NavItem link='/'>Home</NavItem>
   <NavItem link='/Workouts'>Workouts</NavItem>
   <NavItem link='/Nutrients'>Nutrition</NavItem>
   <NavItem link='/Diary'>Diary</NavItem>

</ul>
)

export default navItems;
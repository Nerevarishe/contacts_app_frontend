import React from 'react';
import classes from './NavigationBar.module.css';

import Logo from '../../../UI/Logo/Logo'
import NavigationItem from './NavigationItem/NavigationItem';

const navigationBar = (props) => (
    <nav className={classes.NavigationBar}>
        <Logo />    
        <ul>
            <NavigationItem />
        </ul>
    </nav>
)

export default navigationBar
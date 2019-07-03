import React from 'react';
import classes from './NavigationBar.module.css';

import Logo from '../../../UI/Logo/Logo'
import NavigationItem from './NavigationItem/NavigationItem';

const navigationBar = (props) => (
    <nav className='navbar navbar-expand-sm bg-light navbar-light'>
        <a className="navbar-brand" href="/">
            <div className={classes.Logo}>
                <Logo />
            </div>
        </a>
        <ul className='navbar-nav'>
            <NavigationItem />
        </ul>
    </nav>
)

export default navigationBar;
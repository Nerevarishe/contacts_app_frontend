import React from 'react';
import SearchBar from '../../../SearchBar/SearchBar';

const navigationItem = () => (
    <React.Fragment>
        <li className='nav-item'>
            <SearchBar />
        </li>
        <li className='nav-item'>
            <a className='nav-link' href="/">Login/Logout</a>
        </li>
    </React.Fragment>
)

export default navigationItem
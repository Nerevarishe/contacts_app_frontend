import React from 'react';
import SearchBar from '../../../SearchBar/SearchBar';

const navigationItem = () => (
    <React.Fragment>
        <li>
            <SearchBar />
        </li>
        <li>Login/Logout</li>
    </React.Fragment>
)

export default navigationItem
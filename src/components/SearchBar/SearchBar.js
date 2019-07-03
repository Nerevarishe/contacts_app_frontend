import React from 'react';

const searchBar = () => (
    <form className="form-inline" action="/">
        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
        <button className="btn btn-success" type="submit">Search</button>
    </form>
)

export default searchBar;
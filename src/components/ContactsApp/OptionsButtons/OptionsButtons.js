import React from 'react';

const optionsButtons = (props) => {
    return (
        <React.Fragment>
            <button className='btn btn-primary' onClick={props.buttonEditClicked}>Edit</button>
            <button className='btn btn-danger' onClick={props.buttonDeleteClicked}>Delete</button>
        </React.Fragment>
    );
};

export default optionsButtons;

import React from 'react';

const optionsButtons = (props) => {
    return (
        <React.Fragment>
            <button onClick={props.buttonEditClicked}>Edit</button>
            <button onClick={props.buttonDeleteClicked}>Delete</button>
        </React.Fragment>
    );
};

export default optionsButtons;

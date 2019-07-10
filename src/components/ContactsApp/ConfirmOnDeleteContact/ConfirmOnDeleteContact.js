import React from 'react';

const confirmOnDeleteContact = (props) => {
    return (
        <React.Fragment>
            <p>Delete this contact?</p>
            <p>Contact Name: {props.contactNameToDelete}</p>
            <button className='btn btn-danger' onClick={props.deleteConfirmed}>Yes</button>
            <button className='btn btn-primary' onClick={props.deleteCanceled}>No</button>
        </React.Fragment>
    );
};

export default confirmOnDeleteContact;

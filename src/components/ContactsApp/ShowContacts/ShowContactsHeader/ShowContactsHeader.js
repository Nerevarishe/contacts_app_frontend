import React from 'react';

const showContactsHeader = (props) => {
    return (
        <div>
            <table className='table table-striped'>
                <thead>
                <tr>
                    <th>Full Name</th>
                    <th>Phone</th>
                    <th>E-mail</th>
                    <th>Options</th>
                </tr>
                </thead>
                <tbody>
                    {props.children}
                </tbody>
            </table>
        </div>
    );
};

export default showContactsHeader;

import React from 'react';
import OptionsButtons from '../OptionsButtons/OptionsButtons';

const showContacts = (props) => {
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
                {props.contacts.map(contact => {
                    return (
                        <tr key={contact.id}>
                            <td>{contact.fullName}</td>
                            <td>{contact.phone}</td>
                            <td>{contact.email}</td>
                            <td>
                                <OptionsButtons
                                    buttonEditClicked={props.editContact}
                                    buttonDeleteClicked={props.deleteContact}
                                />
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
};

export default showContacts;

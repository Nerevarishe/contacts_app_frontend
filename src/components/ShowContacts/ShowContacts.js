import React from 'react';
// import axios from 'axios';
import ShowContactsHeader from './ShowContactsHeader/ShowContactsHeader';
import OptionsButtons from '../OptionsButtons/OptionsButtons';

const showContacts = (props) => {
    return (
        <ShowContactsHeader>
            {props.contacts.map(contact => {
                return (
                    <tr key={contact.id}>
                        <td>{contact.fullName}</td>
                        <td>{contact.phone}</td>
                        <td>{contact.email}</td>
                        <td>
                            <OptionsButtons
                                buttonEditClicked={ () => props.editContact(contact.id)}
                                buttonDeleteClicked={() => props.deleteContactModal(contact.id, contact.fullName)}
                            />
                        </td>
                    </tr>
                );
            })}
        </ShowContactsHeader>
    );
};

export default showContacts;

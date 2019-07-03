import React, {Component} from 'react';
import axios from 'axios';

import AddContact from '../../components/ContactsApp/AddContact/AddContact';
import ShowContacts from '../../components/ContactsApp/ShowContacts/ShowContacts';

import Modal from '../../UI/Modal/Modal.js';
import ConfirmOnDeleteContact from '../../components/ContactsApp/ConfirmOnDeleteContact/ConfirmOnDeleteContact';

class ContactsApp extends Component {
    state = {
        contacts: [],
        showModal: false,
        contactToDeleteId: null,
        contactSelectedName: null
    };

    componentDidMount() {
        axios.get('/contacts')
            .then(response => {
                console.log(response);
                this.setState({contacts: response.data});
            })
            .catch(error => console.log(error));
    };

    updateShowContactsHandler = () => {
        axios.get('/contacts')
            .then(response => {
                    // console.log(response)
                    console.log('GET to /users from CDUP');
                    this.setState({contacts: response.data});
                }
            ).catch(error => console.log(error))
    };

    editContactHandler = (contactId) => {
        alert('Edit button clicked!\nContact id: ' + contactId)
    };

    deleteContactHandler = () => {
        // alert('Delete button clicked!\nContact id: ' + contactId);
        axios.delete('/contacts/' + this.state.contactToDeleteId)
            .then(response => {
                console.log(response);
            })
            .catch(error => console.log(error))
            .then( () => {
                this.setState({showModal: false});
                this.updateShowContactsHandler();
            })

    };

    deleteContactModalHandler = (contactId, contactName) => {
        this.setState({
            contactToDeleteId: contactId,
            contactSelectedName: contactName,
            showModal: true
        });
    };

    deleteContactCanceledHandler = () => {
        this.setState({
            contactToDeleteId: null,
            contactSelectedName: null,
            showModal: false
        });
    };

    render() {
        return (
            <React.Fragment>
                <Modal show={this.state.showModal} modalClose={this.state.showModal}>
                    <ConfirmOnDeleteContact
                        deleteConfirmed={this.deleteContactHandler}
                        deleteCanceled={this.deleteContactCanceledHandler}
                        contactNameToDelete={this.state.contactSelectedName}
                    />
                </Modal>
                <AddContact updateShowContacts={this.updateShowContactsHandler}/>
                <ShowContacts
                    contacts={this.state.contacts}
                    editContact={this.editContactHandler}
                    deleteContactModal={this.deleteContactModalHandler}

                />
            </React.Fragment>
        );
    }
}

export default ContactsApp;
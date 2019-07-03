import React, {Component} from 'react';
import axios from 'axios';

import AddContact from '../../components/AddContact/AddContact';
import ShowContacts from '../../components/ShowContacts/ShowContacts';

import Modal from '../../UI/Modal/Modal.js';
import ConfirmOnDeleteContact from '../../components/ConfirmOnDeleteContact/ConfirmOnDeleteContact';

class ContactsApp extends Component {
    state = {
        contacts: [],
        showModal: false,
        contactToDelete: null
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
        axios.delete('/contacts/' + this.state.contactToDelete)
            .then(response => {
                console.log(response);
            })
            .catch(error => console.log(error))
            .then( () => {
                this.setState({showModal: false});
                this.updateShowContactsHandler();
            })

    };

    deleteContactModalHandler = (contactId) => {
        this.setState({
                contactToDelete: contactId,
                showModal: true
            });
        this.setState({});
    };

    deleteContactCanceledHandler = () => {
        this.setState({
            contactToDelete: null,
            showModal: false
        })
    };

    render() {
        return (
            <React.Fragment>
                <Modal show={this.state.showModal} modalClose={this.state.showModal}>
                    <ConfirmOnDeleteContact deleteConfirmed={this.deleteContactHandler} deleteCanceled={this.deleteContactCanceledHandler}/>
                </Modal>
                <AddContact updateShowContacts={this.updateShowContactsHandler}/>
                <ShowContacts
                    contacts={this.state.contacts}
                    editContact={this.editContactHandler}
                    // deleteContact={this.deleteContactHandler}
                    deleteContactModal={this.deleteContactModalHandler}
                />
            </React.Fragment>
        );
    }
}

export default ContactsApp;
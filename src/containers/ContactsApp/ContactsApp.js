import React, {Component} from 'react';
import axios from 'axios';

import AddContact from '../../components/ContactsApp/AddContact/AddContact';
import ShowContacts from '../../components/ContactsApp/ShowContacts/ShowContacts';

import Modal from '../../UI/Modal/Modal.js';
import ConfirmOnDeleteContact from '../../components/ContactsApp/ConfirmOnDeleteContact/ConfirmOnDeleteContact';
import EditContact from '../../components/ContactsApp/EditContact/EditContact';

class ContactsApp extends Component {
    state = {
        contacts: [],

        showDeleteModal: false,
        contactToDeleteId: null,
        contactToDeleteName: null,

        showEditModal: false,
        editContactId: null,
        editContactFullName: null,
        editContactPhone: null,
        editContactEmail: null
    };

    componentDidMount() {
        axios.get('/contacts')
            .then(response => {
                this.setState({contacts: response.data});
            })
            .catch(error => console.log(error));
    };

    updateShowContactsHandler = () => {
        axios.get('/contacts')
            .then(response => {
                    this.setState({contacts: response.data});
                }
            ).catch(error => console.log(error))
    };

    editContactHandler = (contactId, contactFullName, contactPhone, contactEmail) => {
        this.setState({
            editContactId: contactId,
            editContactFullName: contactFullName,
            editContactPhone: contactPhone,
            editContactEmail: contactEmail,
            showEditModal: true
        })
    };

    confirmEditContactHandler = (id, fullName, phone, email) => {
        const contact = {
            fullName: fullName,
            phone: phone,
            email: email
        };
        axios.put('/contacts/' + id, contact)
            .then(response => {
                    this.setState({showEditModal: false});
                    this.updateShowContactsHandler()
                }
            ).catch(error => console.log(error))
    };

    editContactCancelHandler = () => {
        this.setState({
            editContactId: null,
            editContactFullName: null,
            editContactPhone: null,
            editContactEmail: null,
            showEditModal: false
        })
    };

    deleteContactHandler = () => {
        // alert('Delete button clicked!\nContact id: ' + contactId);
        axios.delete('/contacts/' + this.state.contactToDeleteId)
            .then(response => {
                console.log(response);
            })
            .catch(error => console.log(error))
            .then( () => {
                this.setState({showDeleteModal: false});
                this.updateShowContactsHandler();
            })

    };

    deleteContactModalHandler = (contactId, contactName) => {
        this.setState({
            contactToDeleteId: contactId,
            contactToDeleteName: contactName,
            showDeleteModal: true
        });
    };

    deleteContactCanceledHandler = () => {
        this.setState({
            contactToDeleteId: null,
            contactToDeleteName: null,
            showDeleteModal: false
        });
    };

    render() {
        return (
            <React.Fragment>
                 {/*
                 TODO: Refactor Modal logic to one component with changing children content
                 */}
                {
                    this.state.showEditModal ?
                        <Modal show={this.state.showEditModal} modalClose={this.state.showEditModal}>
                            <EditContact confirmEditContact={this.confirmEditContactHandler}
                                         cancelEditContact={this.editContactCancelHandler}
                                         editContactId={this.state.editContactId}
                                         editContactFullName={this.state.editContactFullName}
                                         editContactPhone={this.state.editContactPhone}
                                         editContactEmail={this.state.editContactEmail}
                            />
                        </Modal> :
                        null
                }
                {
                    this.state.showDeleteModal ?
                        <Modal show={this.state.showDeleteModal} modalClose={this.state.showDeleteModal}>
                            <ConfirmOnDeleteContact
                                deleteConfirmed={this.deleteContactHandler}
                                deleteCanceled={this.deleteContactCanceledHandler}
                                contactNameToDelete={this.state.contactToDeleteName}
                            />
                        </Modal> :
                        null
                }
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
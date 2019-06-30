import React, {Component} from 'react';
import axios from 'axios';

import AddContact from '../../components/AddContact/AddContact';
import ShowContacts from '../../components/ShowContacts/ShowContacts';

class ContactsApp extends Component {
    state = {
        contacts: [],
        showContactsUpdate: false
    };

    componentDidMount() {
        axios.get('/contacts')
            .then(
                response => {
                    console.log(response)
                    // console.log('GET to /users from CDM');
                    this.setState({contacts: response.data});
                }
            );
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.showContactsUpdate !== this.state.showContactsUpdate) {
            axios.get('/contacts')
                .then(
                    response => {
                        // console.log(response)
                        console.log('GET to /users from CDUP');
                        this.setState({
                            contacts: response.data,
                            showContactsUpdate: false
                        });
                    }
                );
        }
    }

    updateShowContactsHandler = () => {
        this.setState({showContactsUpdate: true})
    };

    editContactHandler = () => {
        alert('Edit button clicked!')
    };

    deleteContactHandler = () => {
        alert('Delete button clicked!')
    };

    render() {
        return (
            <div>
                <AddContact updateShowContacts={this.updateShowContactsHandler}/>
                <ShowContacts
                    contacts={this.state.contacts}
                    editContact={this.editContactHandler}
                    deleteContact={this.deleteContactHandler}
                />
            </div>
        );
    }
}

export default ContactsApp;
import React, {Component} from 'react';
import axios from 'axios';

import AddContact from '../../components/AddContact/AddContact';
import ShowContacts from '../../components/ShowContacts/ShowContacts';

class ContactsApp extends Component {
    state = {
        contacts: []
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

    deleteContactHandler = (contactId) => {
        // alert('Delete button clicked! ' + contactId);
        axios.delete('/contacts/' + contactId)
            .then(response => {
                console.log(response);
            })
            .catch(error => console.log(error))
            .then( () => this.updateShowContactsHandler())
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
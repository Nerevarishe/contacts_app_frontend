import React, {Component} from 'react';
import axios from "axios";

class AddContact extends Component {
    state = {
        fullName: null,
        phone: null,
        email: null
    };

    addContactHandler = () => {
        const contact = {
            fullName: this.state.fullName,
            phone: this.state.phone,
            email: this.state.email
        };
        axios.post('/contacts', contact)
            .then(response => {
            }).catch(error => console.log(error))
            .then(this.props.updateShowContacts);
    };

    render() {
        return (
            <div className='container'>
                <div className='form-row p-3'>
                    <div className='col'>
                        <input
                            className='form-control'
                            onChange={(event) => this.setState({fullName: event.target.value})}
                            type="text"
                            placeholder="Full Name"
                        />
                    </div>
                    <div className='col'>
                        <input
                            className='form-control'
                            onChange={(event) => this.setState({phone: event.target.value})}
                            type="text"
                            placeholder="Phone"
                        />
                    </div>
                    <div className='col'>
                        <input
                            className='form-control'
                            onChange={(event) => this.setState({email: event.target.value})}
                            type="text"
                            placeholder="E-mail"
                        />
                    </div>
                    <div className='col'>
                        <button className='btn btn-primary' onClick={this.addContactHandler}>Add Contact</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddContact;
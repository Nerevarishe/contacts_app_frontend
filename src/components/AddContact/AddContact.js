import React, {Component} from 'react';
import axios from "axios/index";

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
                console.log(response);
            }).then(
                this.props.updateShowContacts()
        )
    };

    render() {
        return (
            <div>
                <form className='form-inline' action="/">
                    <input
                        className='form-control'
                        onChange={(event) => this.setState({fullName: event.target.value})}
                        type="text"
                        placeholder="Full Name"
                    />
                    <input
                        className='form-control'
                        onChange={(event) => this.setState({phone: event.target.value})}
                        type="text"
                        placeholder="Phone"
                    />
                    <input
                        className='form-control'
                        onChange={(event) => this.setState({email: event.target.value})}
                        type="text"
                        placeholder="E-mail"
                    />
                    <button className='btn btn-primary' onClick={this.addContactHandler}>Add Contact</button>
                </form>
            </div>
        );
    }
}

export default AddContact;
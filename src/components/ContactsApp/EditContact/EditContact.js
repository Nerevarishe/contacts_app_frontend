import React, {Component} from 'react';

class EditContact extends Component {
    state = {
        id: '',
        fullName: '',
        phone: '',
        email: ''
    };


    componentDidMount() {
        this.setState({
            id: this.props.editContactId,
            fullName: this.props.editContactFullName,
            phone: this.props.editContactPhone,
            email: this.props.editContactEmail
        })
    }

    render() {
        return (
            <React.Fragment>
                <input
                    className='form-control m-2'
                    onChange={(event) => this.setState({fullName: event.target.value})}
                    type="text"
                    placeholder="Full Name"
                    value={this.state.fullName}
                />
                <input
                    className='form-control m-2'
                    onChange={(event) => this.setState({phone: event.target.value})}
                    type="text"
                    placeholder="Phone"
                    value={this.state.phone}
                />
                <input
                    className='form-control m-2'
                    onChange={(event) => this.setState({email: event.target.value})}
                    type="text"
                    placeholder="E-mail"
                    value={this.state.email}
                />
                <button className='btn btn-danger m-2' onClick={() => this.props.confirmEditContact(this.state.id,
                    this.state.fullName, this.state.phone, this.state.email)}>Edit Contact
                </button>
                <button className='btn btn-primary m-2' onClick={this.props.cancelEditContact}>Cancel</button>
            </React.Fragment>
        );
    }
}

export default EditContact;

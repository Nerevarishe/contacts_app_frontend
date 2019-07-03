import React, {Component} from 'react';

import Modal from '../UI/Modal/Modal';

import NavigationBar from '../components/Navigation/NavigationBar/NavigationBar';
import ContactsApp from '../containers/ContactsApp/ContactsApp';

class Layout extends Component {
    state = {
        showModal: true
    };

    // ModalHandler = (prevState) => {
    //     if (prevState.showModal !== this.state.showModal) {
    //         this.setState({showModal: !this.state.showModal})
    //     }
    // };

    render() {
        return (
            <div className='row'>
                <div className="col">
                    <Modal show={this.state.showModal} modalClosed={() => this.setState({showModal: false})}/>
                    <NavigationBar>
                        {this.props.children}
                    </NavigationBar>
                    <hr/>
                    <div className="row">
                        <div className='col'>
                            <ContactsApp/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Layout;
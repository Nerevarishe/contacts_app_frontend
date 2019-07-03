import React, {Component} from 'react';

import NavigationBar from '../components/Navigation/NavigationBar/NavigationBar';
import ContactsApp from '../containers/ContactsApp/ContactsApp';

class Layout extends Component {
    render() {
        return (
            <div className='row'>
                <div className="col">
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
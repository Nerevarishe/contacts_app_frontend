import React, {Component} from 'react';

import Auth from '../containers/Auth/Auth'
import NavigationBar from '../components/Navigation/NavigationBar/NavigationBar';
import ContactsApp from '../containers/ContactsApp/ContactsApp';

class Layout extends Component {
    render() {
        return (
            <div className='row'>
                <div className="col">
                    <Auth>
                        <NavigationBar>
                            {this.props.children}
                        </NavigationBar>
                        <hr/>
                        <div className="row">
                            <div className='col'>
                                <ContactsApp/>
                            </div>
                        </div>
                    </Auth>
                </div>
            </div>
        );
    }
}

export default Layout;
import React, { Component } from 'react';

import axios from 'axios';
import {  authUser, AuthContext } from '../../context/AuthContext';



class Auth extends Component {
    
    state = {
        login: false,
        user: null,
        accessToken: null,
        refreshToken: null
    }

    componentDidMount() {
        axios.post('/auth/login', authUser.loginData)
        .then(response => {
            console.log(response);
            this.setState({
                accessToken: response.data.access_token,
                refreshToken: response.data.refresh_token
            });
        })
        .catch(error => console.log(error))
    }

    render() { 
        return (
            <AuthContext.Provider
                acTok={this.state.accessToken}
                refTok={this.state.refreshToken}
            >
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}
 
export default Auth;
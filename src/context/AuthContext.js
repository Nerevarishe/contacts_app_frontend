import React from 'react';


const authUser = {
    user: {
        username: null
    },
    loginData: {
        username: 'admin',
        password: 'admin'
    },
    tokens: {
        accessToken: null,
        refreshToken: null
    }
};

const AuthContext = React.createContext({
    tokens: authUser.tokens
})

export {authUser, AuthContext}
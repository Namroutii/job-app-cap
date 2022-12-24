import React from 'react';
import FacebookLogin from 'react-facebook-login';

function LoginFace() {

    const responseFacebook = (response) => {
        localStorage.setItem('name', response.name);
        localStorage.setItem('email', response.email);
        localStorage.setItem('picture', response.picture.data.url);
    }

    return (
        <FacebookLogin
            appId="534686362056409"
            fields="name,email,picture"
            callback={responseFacebook}
        />
    );
}

export default LoginFace;
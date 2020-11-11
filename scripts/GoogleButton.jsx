import * as React from 'react';
import { Socket } from './Socket';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import { Content_main } from './Content_main';


 function responseGoogle(response) {
    console.log(response);
    let url = response.profileObj.imageUrl;
    let email = response.profileObj.email;
    let name = response.profileObj.name;
    
    Socket.emit('new image', {
        'image': url,
    });
    
    console.log('Sent the image link ' + url + ' to the server!');
    
    Socket.emit('new email', {
        'email': email,
    });
    
    console.log('Sent the email address ' + email + ' to the server!');
    
    Socket.emit('new name', {
        'name': name,
    });
    
    console.log('Sent the name ' + name + ' to the server!');
    
    
    ReactDOM.render(<Content_main />, document.getElementById('content'));
}

export function GoogleButton() {
  return( 
      <GoogleLogin
      className="googleButton"
      clientId="937687230071-bd0c377ob6uqgudp394na6gk8h0h38pi.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy='single_host_origin'/>
      );
}

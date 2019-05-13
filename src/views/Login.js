import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from "react-google-login";

import './index.css';
import 'materialize-css/dist/css/materialize.min.css';
import { Redirect } from "react-router-dom";


class Login extends Component {
  constructor() {
    super();
    this.state = {
      isLogged: false,
    }
    this.responseFacebook = this.responseFacebook.bind(this);
    this.responseGoogle = this.responseGoogle.bind(this);
    this.onFailure = this.onFailure.bind(this)
  }
  responseFacebook(response) {
    console.log(response)
    localStorage.setItem("fbData", JSON.stringify({
      toke: response.token,
      email: response.email,
      name: response.name,
      picture: response.picture.data.url,
      social: "Facebook"
    }))

    this.setState({ isLogged: true })
  }

  responseGoogle(response) {
    console.log(response)
    localStorage.setItem("GData", JSON.stringify({
      token: response.token,
      email: response.profileObj.email,
      name: response.profileObj.name,
      picture: response.profileObj.imageURL,
      social: "Google",
    }))

    this.setState({ isLogged: true })
  }

  onFailure(err) {
    console.log(err)
  }


  render() {
    if (this.state.isLogged) {
      return (<Redirect to="/home/" />);
    }
    return (
      <div className="Login">
        <div className="Login-box">
          <div className="card">
            <div className="card-content">
              <FacebookLogin
                appId="1260651784103841"
                autoload={false}
                fields="name, email, picture.width(120)"
                callback={this.responseFacebook}
                onFailure={this.onFailure}
                textButton="Facebook"
                cssClass="waves-effect waves-light btn blue darken-2"
                icon="fa fa-facebook" />

              <GoogleLogin
                clientId="372353009990-2kvricu0jcqfkmrchfack3mmc5lv85cu.apps.googleusercontent.com"
                autoLoad={false}
                onSuccess={this.responseGoogle}
                onFailure={this.onFailure}
                className="waves-effect waves-light btn lighten-1"
              />

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

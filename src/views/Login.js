import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';
import './index.css';
import 'materialize-css/dist/css/materialize.min.css'

class Login extends Component {
  constructor() {
    super();
    this.responseFacebook = this.responseFacebook.bind(this);
    this.onFailire = this.onFailire.bind(this)
  }
  responseFacebook(response) {
    console.log(response)
    localStorage.setItem("fbData", JSON.stringify({
      toke: response.token,
      email: response.email,
      name: response.name,
      picture: response.picture.data.url
    }))
  }
  onFailire(err) {
    console.log(err)
  }


  render() {
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
              <button className="waves-effect waves-light btn red lighten-1" id="google">Google
              <i className="fab fa-google"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      profileImage: "",
      fullName: "",
      email: "",
      social: "",
      isLogout: false
    };
    this.onLogout = this.onLogout.bind(this);
  }
  componentWillMount() {
    let fbData = JSON.parse(localStorage.getItem("fbData"));
    let GData = JSON.parse(localStorage.getItem("GData"));

    if (!fbData && !GData) {
      this.setState({ isLogout: true });
    }
    if (fbData) {
      this.setState({
        profileImage: fbData.picture,
        fullName: fbData.name,
        email: fbData.email,
        social: fbData.social
      });
    } else if (GData) {
      this.setState({
        profileImage: GData.picture,
        fullName: GData.name,
        email: GData.email,
        social: GData.social
      });
    }
  }
  onLogout(e) {
    //TODO Setear todas las variables de mi local storage vacias, y redireccionar a inicio
    localStorage.clear();
    this.setState({ isLogout: true });
  }
  render() {
    if (this.state.isLogout) {
      return <Redirect to="/" />;
    }
    return (
      <div id="data-page" className="container">
        <div className="row">
          <div className="col-4 offset-4">
            <div className="card">
              <img
                className="card-img-top"
                src={this.state.profileImage}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Your data</h5>
                <ul class="list-group">
                  <li class="list-group-item">Name: {this.state.fullName}</li>
                  <li class="list-group-item">Email: {this.state.email}</li>
                  <li class="list-group-item">Social: {this.state.social}</li>
                </ul>
                <a href="#" className="btn btn-dark data-logout" onClick={this.onLogout}>
                Logout
                  <i className="fa fa-power-off" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

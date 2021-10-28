import React, { Component } from 'react';
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import './App.css';
import ChangePassword from './Screens/ChangePassword';
import EditProfile from './Screens/EditProfile';
import Forgot from './Screens/Forgot';
import ForgotCode from './Screens/ForgotCode';
import Landing from './Screens/Landing';
import Main from './Screens/Main';
import Register from './Screens/Register';
import Signin from './Screens/Signin';
import Terms from './Screens/Terms';
export default class App extends Component {
  constructor(props){
    super(props);
    global.url='http://54.211.85.208:3000';
  }
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Signin} />
        <Route path="/editprofile" component={EditProfile} />
        <Route path="/signin" component={Signin} />
        <Route path="/home" component={Landing} />
        <Route path="/map" component={Main} />
        <Route path="/terms" component={Terms} />
        <Route path="/forgot" component={Forgot} />
        <Route path="/code" component={ForgotCode} />
        <Route path="/changepassword" component={ChangePassword} />
        <Route path="/register" component={Register} />
        Terms
      </Switch>
    )
  }
}

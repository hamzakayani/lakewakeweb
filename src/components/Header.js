import React, { Component } from 'react';
import { Link } from "react-router-dom";
export default class Header extends Component {
    constructor(props) {
        super(props);
    }
    logout=()=>{
        localStorage.clear();
    }
  render() {
    return (
        <header>
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <Link className="navbar-brand" to="/home"><img src="./images/logo.png" style={{width:60}}/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{justifyContent:'flex-end'}}>
                <form className="d-flex ms-auto align-items-center">
                        {localStorage.getItem('usertoken')!=null && (
                            <li className="nav-item">
                                <Link className="nav-link active" to='/editprofile'>Edit Profile</Link>
                            </li>
                        )}
                        {localStorage.getItem('usertoken')!=null && (
                            <li className="nav-item">
                                <Link className="nav-link active" to='/changepassword'>Change Password</Link>
                            </li> 
                        )}
                       
                        <li className="nav-item">
                            <Link className="nav-link" to='/terms'>Terms</Link>
                        </li>
                        {localStorage.getItem('usertoken')==null && (
                           <li className="nav-item">
                                <Link className="nav-link" type="button" to='/signin'>Sign in</Link>
                            </li>
                        )}
                        {localStorage.getItem('usertoken')==null && (
                            <li className="nav-item">
                                <Link className="nav-link" to='/register'><button className="btn btn-primary">Sign up</button></Link>
                            </li>
                        )}
                        {localStorage.getItem('usertoken')!=null && (
                            <li className="nav-item">
                                <a className="nav-link" href='#'><button className="btn btn-primary" onClick={()=>{this.logout()}}>Logout</button></a>
                            </li>
                        )}
                        
                        <li className="nav-item">
                        <a className="nav-link" href="#"><img src="./images/Verticalline.png" /></a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="https://apps.apple.com/us/app/lake-wakes/id1581259743" target="_blank"><img src="./images/applelogo.png" /></a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#"><img src="./images/arrowlogo.png" /></a>
                        </li>
                        
                </form>
                </div>
            </div>
        </nav>
        </header>
    );
  }
}
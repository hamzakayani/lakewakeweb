import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
export default class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email:'' , password:''
        };
        console.log(localStorage.getItem('usertoken'));
        if(localStorage.getItem('usertoken')!=null){
            this.props.history.push('/home');
        }
    }  
    loginfun(){
        var body={
            "email":this.state.email,
            "password":this.state.password
        }
        axios.post(global.url+'/login', body ).then(res => {
          console.log(res);
          if(res.data.statusCode==200){
            global.token=res.data.data.token;
            localStorage.setItem('usertoken', res.data.data.token);
            this.props.history.push('/home');
          }
          else{
            alert(res.data.message)
          }
            
        }).catch(err=>{
            alert(err.response);
        })
    }
  render() {
    return (
        <>
        <section id="login-section">
          <div className="container login-container">
            <div className="row">
              <div className="col-md-6 ads p-0">
                <img src="./images/img2.jpeg" className=" logoimgstyle" alt="..." />
              </div>
              <div className="col-md-6 login-form">

                <h6 className="text-center"><span className="lakewake-text">Lake<span className="wake-text">Wakes</span></span></h6>

                    <h1 className="text-center"><span className="accountlogin-text">Account Login</span></h1>
                    <p className="welcome-text">Welcome Back to your existing account <br/>at LakeWakes</p>

                <div className="row mt-4">
                  <div className="col-md-12 col-lg-12 col-xl-12">
                    <form>
                      <div className="form-group  mb-2">
                        <input type="email" className="form-control" name="email" placeholder="Email" 
                        value={this.state.email} onChange={(e) => {this.setState({email:e.target.value})}}/>
                      </div>
                      <div className="form-group">
                        <input type="password" className="form-control" name="password" placeholder="Password" 
                        value={this.state.password} onChange={(e) => {this.setState({password:e.target.value})}}/>
                      </div>
                      <div className="form-group text-center mt-2">
                        <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => this.loginfun()}><span className="signin-text">Sign In</span></button>
                      </div>
                      <div className="form-group forget-password " style={{width:200}}>
                      Create new account <Link to='/register'> Register</Link>
                      </div>
                      <div className="form-group forget-password mt-5">
                      <Link to='/forgot'>Forget Password</Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </section>
        </>
    );
  }
}

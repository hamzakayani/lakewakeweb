import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email:'' , password:'',name:''
        };
    }  
    registerFun(){
        var body={
            "name":this.state.name,
            "email":this.state.email,
            "password":this.state.password
        }
        axios.post(global.url+'/register', body ).then(res => {
            console.log(res.data);
            if(res.data.statusCode==200){
              this.props.history.push('/signin');
            }
            else{
              alert(res.data.message)
            }
        }).catch(err=>{
            alert(err.response)
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

              <h1 className="text-center"><span className="accountlogin-text">Account Register</span></h1>
              <p className="welcome-text">Welcome please create account at LakeWakes</p>

          <div className="row">
            <div className="col-md-12 col-lg-12 col-xl-12">
              <form>
                <div className="form-group  mb-2">
                  <input type="text" className="form-control" name="name" placeholder="Name" 
                  value={this.state.name} onChange={(e) => {this.setState({name:e.target.value})}} />
                </div>
                <div className="form-group  mb-2">
                  <input type="email" className="form-control" name="email" placeholder="Email" 
                  value={this.state.email} onChange={(e) => {this.setState({email:e.target.value})}} />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" name="password" placeholder="Password" 
                  value={this.state.password} onChange={(e) => {this.setState({password:e.target.value})}} />
                </div>
                <div className="form-group text-center mt-2">
                  <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => this.registerFun()}><span className="signin-text">Sign Up</span></button>
                </div>
                <div className="form-group forget-password " style={{width:200}}>
                Already have account <Link to='/signin'> Login</Link>
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

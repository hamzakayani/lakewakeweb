import React, { Component } from 'react'
import axios from "axios";
import Header from '../components/Header';
export default class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = { token:localStorage.getItem('usertoken'),
      oldpassword:'',
      newpassword:'',
      userid:''
    };
}
  changePassword=()=>{
    var header={
        "Authorization":this.state.token
    }
    var body={
        "oldpassword": this.state.oldpassword,
        "newpassword": this.state.newpassword
    }
    const url = global.url+'/resetPassword';
    axios.post(url,body,{headers:header}).then(res => {
      if(res.data.statusCode==200){
        this.props.history.push('/home');
      }
      else{
        alert(res.data.message)
      }
    }).catch(err=>{
        alert(err.response)
    });
}
    render() {
        return (
            <>
            <Header />
            <section id="login-section">
              <div className="container login-container">
                <div className="row">
                  <div className="col-md-6 ads p-0">
                    <img src="./images/img2.jpeg" className=" logoimgstyle" alt="..." />
                  </div>
                  <div className="col-md-6 login-form">
    
                    <h6 className="text-center"><span className="lakewake-text">Lake<span className="wake-text">Wakes</span></span></h6>
                        <h1 className="text-center"><span className="accountlogin-text">Change Password</span></h1>
                        <div className="row mt-4">
                        <div className="col-md-12 col-lg-12 col-xl-12">
                            <form>
                            <div className="form-group  mb-2">
                        <input type="password" className="form-control" name="username" placeholder="Current Password" 
                        value={this.state.oldpassword} onChange={(e) => {this.setState({oldpassword:e.target.value})}}/>
                        </div>
                        <div className="form-group  mb-2">
                        <input type="password" className="form-control" name="username" placeholder="New Password" 
                        value={this.state.newpassword} onChange={(e) => {this.setState({newpassword:e.target.value})}}/>
                        </div>
                        <div className="form-group text-center mt-2">
                        <button type="button" className="btn btn-primary btn-lg btn-block" onClick={()=>{this.changePassword()}}><span className="signin-text">Change Password</span></button>
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

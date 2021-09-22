import React, { Component } from 'react'
import { Link } from "react-router-dom";
import axios from "axios";
export default class Forgot extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            email:'' 
        };
    }  
    forgotfun(){
        var body={
            "email":this.state.email
        }
        axios.post(global.url+'/forgotPassword', body ).then(res => {
          if(res.data.statusCode==200){
            this.props.history.push('/code');
          }
          else{
            alert(res.data.message)
          }
        }).catch(err=>{
            console.log('====================================');
            console.log(err.response);
            console.log('====================================');
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
                        <h1 className="text-center"><span className="accountlogin-text">Forgot Password</span></h1>
                    <div className="row mt-4">
                      <div className="col-md-12 col-lg-12 col-xl-12">
                        <form>
                          <div className="form-group  mb-2">
                            <input type="text" className="form-control" name="username" placeholder="Email" 
                            value={this.state.email} onChange={(e) => {this.setState({email:e.target.value})}}/>
                          </div>
                          <div className="form-group text-center mt-2">
                            <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => this.forgotfun()}><span className="signin-text">Send Email</span></button>
                          </div>
                            <div className="form-group forget-password " style={{width:200}}>
                                Already have account <Link to='/signin'> Login</Link>
                            </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div> 
            </section>
            </>
        )
    }
}

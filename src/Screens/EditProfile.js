import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import Header from '../components/Header';
import Footer from '../components/Footer';
export default class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { token:localStorage.getItem('usertoken'),
          userdata:'',
          name:'',
          email:'',
          id:''
        };
        this.getUser();
    }
    
    getUser=()=>{
      var header={
          "Authorization":this.state.token
      }
      const url = global.url+'/getUserProfile';
      axios.get(url,{headers:header}).then(res => {
        console.log(res);
        if(res.data.statusCode==200){
          this.setState({email:res.data.data[0].email,name:res.data.data[0].name});
        }
        else{
          alert(res.data.message)
        }
      }).catch(err=>{
          alert(err.response)
      });
  }
    editProfile=()=>{
        var header={
            "Authorization":this.state.token
        }
        var body={
            "name": this.state.name,
            "email": this.state.email
        }
        const url = global.url+'/updateUser';
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
                    <h1 className="text-center"><span className="accountlogin-text">Edit Profile</span></h1>
                    <div className="row mt-4">
                    <div className="col-md-12 col-lg-12 col-xl-12">
                        <form>
                        <div className="form-group  mb-2">
                    <input type="text" className="form-control" name="username" placeholder="Name" 
                    value={this.state.name} onChange={(e) => {this.setState({name:e.target.value})}}/>
                    </div>
                    <div className="form-group  mb-2">
                    <input type="email" className="form-control" name="email" placeholder="Email" 
                    value={this.state.email} onChange={(e) => {this.setState({email:e.target.value})}}/>
                    </div>
                    <div className="form-group text-center mt-2">
                    <button type="button" className="btn btn-primary btn-lg btn-block" onClick={()=>{this.editProfile()}}><span className="signin-text">Edit Profile</span></button>
                    </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </section>
        {/* <Footer /> */}
        </>
    );
  }
}

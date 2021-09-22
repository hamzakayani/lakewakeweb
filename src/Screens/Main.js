import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';
import { Polyline } from '@react-google-maps/api';
const options = {
  strokeColor: '#345692',
  strokeOpacity: 1,
  strokeWeight: 5,
  fillColor: '#345692',
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 30000,
  paths: [],
  zIndex: 1
};
export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { token:localStorage.getItem('usertoken'), 
            email:'' , password:'',long:-83.96834980742868,lat:34.23883448325116,
            startingLocation:this.props.history.location.state.startinglocation,endingLocation:this.props.history.location.state.endingLocation
        };
        
        console.log(this.props.history.location.state);
    } 
    componentDidMount(){
      if ("geolocation" in navigator) {
        console.log("Available");
        navigator.geolocation.getCurrentPosition((position) =>{
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            this.setState({long:position.coords.longitude,lat:position.coords.latitude})
        });
        } else {
        console.log("Not Available");
        }
    }
  render() {
    return (
        <>
        <Header />
          <section id="filter">
          <div className="container-fluid">
            <div className="row">
              {/* <div className="col-md-4" style={{height:'90vh',overflow:'scroll'}}>
                <div className="filter-content">
                  <div className="row">
                    <div className="col-12">
                        <p className="mb-0">Found 12</p>
                    </div>
                  </div>

                  <div className="card mb-4 card-img">
                    <div className="row">
                      <div className="col-md-4">
                        <img src="./images/Bitmap_3.png" className="img-fluid" alt="..." />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <p className="card-text">Restaurant</p>
                          <h5 className="card-title fw-bold">Texas Roadhouse</h5>
                          <p className="card-text"><small className="text-muted text-wrap">5835 Granger St Corona, New York(NY), 11368</small></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card mb-4 card-img">
                    <div className="row">
                      <div className="col-md-4">
                        <img src="./images/Bitmap_3.png" className="img-fluid" alt="..." />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <p className="card-text">Restaurant</p>
                          <h5 className="card-title fw-bold">Texas Roadhouse</h5>
                          <p className="card-text"><small className="text-muted text-wrap">5835 Granger St Corona, New York(NY), 11368</small></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card mb-4 card-img">
                    <div className="row">
                      <div className="col-md-4">
                        <img src="./images/Bitmap_3.png" className="img-fluid" alt="..." />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <p className="card-text">Restaurant</p>
                          <h5 className="card-title fw-bold">Texas Roadhouse</h5>
                          <p className="card-text"><small className="text-muted text-wrap">5835 Granger St Corona, New York(NY), 11368</small></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card mb-4 card-img">
                    <div className="row">
                      <div className="col-md-4">
                        <img src="./images/Bitmap_3.png" className="img-fluid" alt="..." />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <p className="card-text">Restaurant</p>
                          <h5 className="card-title fw-bold">Texas Roadhouse</h5>
                          <p className="card-text"><small className="text-muted text-wrap">5835 Granger St Corona, New York(NY), 11368</small></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card mb-4 card-img">
                    <div className="row">
                      <div className="col-md-4">
                        <img src="./images/Bitmap_3.png" className="img-fluid" alt="..." />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <p className="card-text">Restaurant</p>
                          <h5 className="card-title fw-bold">Texas Roadhouse</h5>
                          <p className="card-text"><small className="text-muted text-wrap">5835 Granger St Corona, New York(NY), 11368</small></p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
               */}
              <div className="col-md-12 p-0" style={{width:'100%',height:'90vh'}}>
                  <GoogleMap
                    mapContainerStyle={{
                      width: '100%',
                      height: '100%'
                    }}
                    center={{
                      lat: this.state.lat,
                      lng: this.state.long
                    }}
                    zoom={10}
                  >
                    <Marker
                      title='Starting Position'
                      position={{
                        lat: this.state.startingLocation.lat,
                        lng: this.state.startingLocation.long
                      }}
                    />
                    <Marker
                      icon={"./images/boat.png"}
                      title='Current Location'
                      position={{
                        lat: this.state.lat,
                        lng: this.state.long
                      }}
                    />
                    <Marker
                      title='Destinagion Position'
                      position={{
                        lat: this.state.endingLocation.lat,
                        lng: this.state.endingLocation.long
                      }}
                    />
                    <Polyline
                      path={[
                        {lat: this.state.startingLocation.lat, lng: this.state.startingLocation.long},
                        {lat: this.state.endingLocation.lat, lng: this.state.endingLocation.long}
                      ]}
                      options={options}
                    />
                  </GoogleMap>
              </div>
            </div>
          </div>
          </section>
          <Footer />
        </>
    );
  }
}

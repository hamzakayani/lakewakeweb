import React, { Component } from 'react';
import axios from "axios";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { geocodeByPlaceId } from 'react-google-places-autocomplete';
import { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';
export default class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = { token:localStorage.getItem('usertoken'), 
            email:'' , password:'',
            startinglocation:{lat:'',long:''},
            endingLocation:{lat:'',long:''}
        };
        if ("geolocation" in navigator) {
        console.log("Available");
        navigator.geolocation.getCurrentPosition((position) =>{
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            // this.getNearbyLoc(position.coords.latitude,position.coords.longitude)
        });
        } else {
        console.log("Not Available");
        }
    }  
    getaddressstarting=(id)=>{
        geocodeByPlaceId(id).then(results => {
            console.log(results)
            getLatLng(results[0]).then(({ lat, lng }) => {
                console.log('Successfully got latitude and longitude', { lat, lng })
                this.setState({startinglocation:{ lat:lat, long:lng }})
            }).catch((err)=>{
                console.log(err);
            })
        }).catch(error => console.error(error));
    }
    getaddressend=(id)=>{
        geocodeByPlaceId(id).then(results => {
            console.log(results)
            getLatLng(results[0]).then(({ lat, lng }) => {
                console.log('Successfully got latitude and longitude', { lat, lng });
                this.setState({endingLocation:{ lat:lat, long:lng }})
            }).catch((err)=>{
                console.log(err);
            })
        }).catch(error => console.error(error));
    }
    getRoute=()=>{
        if(this.state.startinglocation.lat!='' && this.state.endingLocation.lat!=''){
            this.props.history.push('/map', { startinglocation: this.state.startinglocation,endingLocation:this.state.endingLocation })
        }
        else{
            alert('Please add starting and destination Location')
        }
    }
    // getNearbyLoc=(lat,long)=>{
    //     console.log(lat,long);
    //     const proxyurl = "https://cors-anywhere.herokuapp.com/";
    //     const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${long}&radius=1500&type=restaurants&key=AIzaSyAG98-2myQ5O0aIB7mprgK1CBHwWgzoiYQ`;
    //     axios.get(proxyurl+url).then(res => {
    //       console.log(res);
    //     }).catch(err=>{
    //         console.log(err);
    //         // alert(err.response)
    //     });
    // }
  render() {
    return (
        <>
        <Header />
        <section id="hero-section" style={{height:600}}>
            <div className="img-content">
                <img src="./images/img.jpeg" alt="Snow" className=" image-fluid" />
                <div className="bottom-left">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2 className="text-secondary w-50 mb-3"> 
                                    Discover nearby in  your lake journey
                                </h2>
                                <div className="input-group mb-3">
                                    {/* <input type="text" className="form-control" placeholder="Enter Starting Location"  />
                                     */}
                                     <GooglePlacesAutocomplete 
                                     selectProps={{
                                        onChange:(e)=>{
                                        console.log(e);
                                        this.getaddressstarting(e.value.place_id)
                                        },
                                        placeholder:'Enter Starting Location',
                                        styles: {
                                          input: (provided) => ({
                                            ...provided,
                                            width:300,
                                            height:78
                                          })
                                        },
                                      }}/>
                                    {/* <input type="text" className="form-control" placeholder="Enter Ending Location" /> */}
                                    <GooglePlacesAutocomplete 
                                     selectProps={{
                                        onChange:(e)=>{
                                            console.log(e);
                                            this.getaddressend(e.value.place_id)
                                        },
                                        placeholder:'Enter Ending Location',
                                        styles: {
                                          input: (provided) => ({
                                            ...provided,
                                            width:300,
                                            height:78,
                                          })
                                        },
                                      }}/>
                                    <button className="btn btn-outline-secondary hero-btn" type="button" id="button-addon2" onClick={()=>{this.getRoute()}} >Get Route</button>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div> 
            </div>
        </section>  

        {/* <section id="images-card">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="Explore">Explore by Popular Places</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 places-card">
                        <img src="./images/Bitmap_3.png" className="rounded img-fluid" alt="..." />
                        <div className="card-content">
                            <h2 className="text-secondary mb-3"> 
                            Lake Powell
                            </h2>
                            <p className="text-secondary">12 Nearby Resturants</p>
                        </div>
                        
                    </div>
                    <div className="col-lg-3 places-card">
                        <img src="./images/Bitmap_2.png" className="rounded img-fluid" alt="..." />
                        <div className="card-content">
                            <h2 className="text-secondary mb-3"> 
                            Lake Superior
                            </h2>
                            <p className="text-secondary">03 Nearby Resturants</p>
                        </div>
                        
                    </div>
                    <div className="col-lg-3 places-card">
                        <img src="./images/Bitmap_1.png" className="rounded img-fluid" alt="..." />
                        <div className="card-content">
                            <h2 className="text-secondary mb-3"> 
                                Champlain
                            </h2>
                            <p className="text-secondary">03 Nearby Resturants</p>
                        </div>  
                    </div>
                    <div className="col-lg-3 places-card">
                        <img src="./images/Bitmap_4.png" className="rounded img-fluid" alt="..."/>
                        <div className="card-content">
                        <h2 className="text-secondary mb-3"> 
                            Echo Lake
                            </h2>
                            <p className="text-secondary">15 Nearby Resturants</p>
                        </div>
                        
                    </div> 
                </div>
            </div>
        </section> */}

        {/* <section id="discover">
            <div className="container">
                <div className="row">
                    <div className="col-12"> 
                        <div className="discover-content">
                            <img src="./images/discover.png" alt="Snow" className=" image-fluid"/>
                            <div className="content-position">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-7">
                                            <h2 className="text-secondary w-75 mb-3"> 
                                            Gain access to exclusive offers, 
                                            best-of lists, local business & more
                                            </h2>
                                            <p className="text-white">You can unsubscribe any time</p>
                                            <div className="d-flex mb-3">
                                                <input type="input" className="form-control" placeholder="Your Email Address"/>
                                                <button type="button" className="btn btn-light"><span className="subscribe">Subscribe</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            </div> 
                        </div>
                    </div>
                </div> 
            </div>
        </section> */}
    <div className="container" id="nearby">
        <div style={{ flex: 1,backgroundColor:'#fff'}}>
            <div style={{padding:20,paddingTop:20}}>
                 <div className="row">
                    <div className="col-md-12 mb-0">
                        <h2 className="nearby-you m-0" style={{textAlign:'center'}}>Lake Wakes Navigation and Rescue</h2>
                    </div>
                </div>
                <p style={{color: "#1a1a1a", fontSize: 16,}}>
                Boaters aren’t just people that ride boats. No matter what Lake or what body of Water we are on, we try our best to be a help to the ones around us. That’s why we consider ourselves a Community Of Boaters. That Boating Community has created this application to ensure direct and safe boating travels. On The LakeWakes app not only will you be able to arrive to your destination but you can ensure to do it as safe as possible with our Rescue button. Most of us have Tow Boat US but if you have had problems on the water you know that you don’t always have the time to spare to wait, but with our rescue button, everyone on the LakeWakes app will be aware of your position which means the closest person to you can render aid.. We love our Boats and the water, but with the boating community standing together it will only insure for a safer ride fir all of us.. Happy Boating..
                </p>
                {/* </View> */}
            </div>

        </div>
    </div>
            
        {/* <section id="nearby">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 mb-0">
                        <h2 className="nearby-you">Nearby you</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="card mb-1 card-img">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src="./images/outbook.png" className="img-fluid" alt="..." />
                                </div>
                                <div className="col-md-5">
                                    <div className="card-body">
                                    <p className="card-text">2.3 km away</p>
                                    <h5 className="card-title fw-bold">Outback Steakhouse</h5>
                                    <p className="card-text text-wrap"><small className="text-muted">5835 Granger St Corona, New York(NY), 11368</small></p>
                                    <p className="card-text">$150 - $300</p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card mb-1 card-img">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src="./images/church.png" className="img-fluid" alt="..." />
                                </div>
                                <div className="col-md-5">
                                    <div className="card-body">
                                    <p className="card-text">3 km away</p>
                                    <h5 className="card-title fw-bold">Church’s Chicken	</h5>
                                    <p className="card-text text-wrap"><small className="text-muted">5835 Granger St Corona, New York(NY), 11368</small></p>
                                    <p className="card-text">$150 - $300</p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="card mb-4 card-img">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src="./images/jersey.png" className="img-fluid" alt="..." />
                                </div>
                                <div className="col-md-5">
                                    <div className="card-body">
                                    <p className="card-text">3.4 km away</p>
                                    <h5 className="card-title fw-bold">Jersey Mike’s Subs	</h5>
                                    <p className="card-text text-wrap"><small className="text-muted">825 W 10th St, Contact For Any Questions @ 605-940-4344, Sioux Falls, 57104</small></p>
                                    <p className="card-text">$150 - $300</p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card mb-4 card-img">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src="./images/zaxby.png" className="img-fluid" alt="..." />
                                </div>
                                <div className="col-md-5">
                                    <div className="card-body">
                                    <p className="card-text">4.1 km away</p>
                                    <h5 className="card-title fw-bold">Zaxby’s</h5>
                                    <p className="card-text text-wrap"><small className="text-muted">5835 Granger St Corona, New York(NY), 11368</small></p>
                                    <p className="card-text">$150 - $300</p>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
         */}
        <Footer />
        </>
    );
  }
}

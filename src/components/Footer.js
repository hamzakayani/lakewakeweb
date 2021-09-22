import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class Footer extends Component {
    render() {
        return (
          <section id="footer">
            <footer class="text-center text-lg-start text-white" style={{backgroundColor:'#4c72a8'}}>
              <div class="container">
                  <div class="row">
                    <div class="col-md-6 col-lg-6 col-xl-6 mt-3">
                      <h6 class="m-0 mb-2 font-weight-bold">
                        Contact Number
                      </h6>
                      <p>
                      (470) 208-6200
                      </p>

                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-6 mt-3">
                      <h6 class="m-0 mb-2 font-weight-bold">Address</h6>
                      <p>715 Peachtree St Ne Suite100 Atlanta Ga 30308</p>
                    </div>
                  </div>
              </div>
            </footer>
            <div className="text-center p-3" style={{backgroundColor:'#345692'}}>
              <p className="text-dark" style={{color:'#fff'}}> © LakeWakes Copyright 2021. All Rights Reserved</p>
            </div>
          </section>
        )
    }
}

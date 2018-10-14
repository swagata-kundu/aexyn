import React, { Component } from 'react';

export default class CompanySelect extends Component {
  render() {
    return (
      <section className="custom-account-container-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="section-header col-sm-12 text-center">
              <h1>
                Hello <span className="username">Username</span>,
              </h1>
              <h1>Welcome to Aexyn</h1>
            </div>
          </div>
        </div>
        <div className="office-selection">
          <h5>
            Now, which <span className="office-name">Office Name</span> office
            do you work out of?
          </h5>
          <ul className="clearfix">
            <li>Delhi</li>
            <li>Gurgaon</li>
            <li className="menu-has-child">
              <a href="#">
                <i className="fa fa-plus" aria-hidden="true" /> Enter a New
                Office Location
              </a>
            </li>
          </ul>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="office-selection">
                  <h3>
                    <i className="fa fa-map-marker" aria-hidden="true" /> New
                    Office
                  </h3>
                  <form>
                    <div className="form-field">
                      <div className="label">
                        <label>Office Address</label>
                      </div>
                      <div className="input">
                        <input
                          type="text"
                          name="name"
                          placeholder="Street / P.O Box"
                        />
                        <input
                          type="text"
                          name="name"
                          placeholder="Suite / Floor"
                        />
                        <input type="text" name="name" placeholder="City" />
                        <div className="two-col-right-input">
                          <select className="state" />
                          <input type="text" name="name" placeholder="Zip" />
                        </div>
                        <select name="country" placeholder="India" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <center>
            <a href="#" className="office-selection-btn custom-btn">
              Next <i className="fa fa-angle-double-right" />
            </a>
          </center>
          <center>
            <a href="#" className="back-to-office-select">
              <i className="fa fa-angle-double-left"> Back</i>
            </a>
          </center>
        </div>
      </section>
    );
  }
}

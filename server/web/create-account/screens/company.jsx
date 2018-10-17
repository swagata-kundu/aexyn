import React, { Component } from 'react';
import Header from '../components/header';

export default class Company extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      companies: [],
      company_id: null
    };
  }

  renderItem = () => (
    <div className="item">
      <div className="company-detail">
        <div className="icon">
          <i className="fa fa-building-o" aria-hidden="true" />
        </div>
        <div className="about-company">
          <a href="#" className="company-name">
            Company name
          </a>
          <span className="company-location">
            <span className="city">City</span>,<span className="state" />
            State
          </span>
        </div>
      </div>
    </div>
  );

  renderCompanies = () => (
    <div className="company-items clearfix">
      {this.renderItem()}
      <div className="item last">
        <a href="/create-company">
          <div className="company-detail">
            <div className="icon">
              <i className="fa fa-plus" aria-hidden="true" />
            </div>
            <div className="about-company">
              <span className="company-location">Don't see your company?</span>
              <span className="company-name">Create a new one?</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );

  render() {
    return (
      <div>
        <Header />
        <section className="custom-account-container-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="section-header col-sm-12 text-center">
                <h1>
                  Hello
                  <span className="username">Username</span>,
                </h1>
                <h1>Welcome to Aexyn</h1>
              </div>
            </div>
          </div>
          <div className="company-selection">
            <div className="company-selection-search">
              <form>
                <label>What is the name of your company?</label>
                <div className="input">
                  <i className="fa fa-search" aria-hidden="true" />
                  <input type="search" placeholder="Search" />
                </div>
              </form>
            </div>
            <div className="companies">
              <h5>
                Search your company if it is already on Aexyn platform or
                <a href="/create-company"> Create a new one.</a>
              </h5>
              {this.renderCompanies()}
            </div>
            <center>
              <a
                href="/office-selection"
                className="company-selection-btn custom-btn"
              >
                Next
                <i className="fa fa-angle-double-right" />
              </a>
            </center>
            <center>
              <a href="#" className="back-to-office-select">
                <i className="fa fa-angle-double-left"> Back</i>
              </a>
            </center>
          </div>
        </section>
      </div>
    );
  }
}

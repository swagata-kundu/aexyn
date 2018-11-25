import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/header';
import Welcome from '../components/welcome';
import { load_company, mergeKeys } from '../state/action';

class Company extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }

  componentDidMount() {
    const { searchText } = this.props;
    if (searchText) {
      this.props.load_company({ searchText });
    }
  }

  handleSearch = (e) => {
    const searchText = e.target.value;
    this.setState({ searchText });
    this.props.load_company({ searchText });
  };

  selectCompany=(company_id) => {
    this.props.mergeKeys({ company_id });
  }

  next=() => this.props.mergeKeys({ step: 'SELECT_OFFICE' });

  back=() => this.props.mergeKeys({ step: 'USER_INFO' });

  create=() => this.props.mergeKeys({ step: 'CREATE_COMPANY', company_id: null });


  renderCompany = (c) => {
    const company = c.toJSON();
    const office = company.offices[0];
    return (
      <div key={company.id} role="presentation" className="item" onClick={() => this.selectCompany(company.id)}>
        <div className="company-detail">
          <div className="icon">
            <i className="fa fa-building-o" aria-hidden="true" />
          </div>
          <div className="about-company">
            <a href="#" className="company-name">
              {company.name}
            </a>
            <span className="company-location">
              <span className="city">{office.city}</span>
,
              <span className="state" />
              {office.state}
            </span>
          </div>
        </div>
      </div>
    );
  }
  ;

  renderCompanies = () => {
    const { companies } = this.props;
    if (companies.size === 0) {
      return null;
    }
    return (
      <div className="company-items clearfix">
        {companies.map(c => this.renderCompany(c))}
        <div className="item last">
          <a onClick={this.create}>
            <div className="company-detail">
              <div className="icon">
                <i className="fa fa-plus" aria-hidden="true" />
              </div>
              <div className="about-company">
                <span className="company-location">
                  Don't see your company?
                </span>
                <span role="presentation" onClick={this.create} className="company-name">Create a new one?</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  };

  render() {
    const { companies, searchText, company_id } = this.props;
    const { size } = companies;
    const text = this.state.searchText || searchText;
    return (
      <div>
        <Header />
        <section className="custom-account-container-wrapper">
          <Welcome />
          <div className="company-selection">
            <div className="company-selection-search">
              <form>
                <label>What is the name of your company?</label>
                <div className="input">
                  <i className="fa fa-search" aria-hidden="true" />
                  <input value={text} onChange={this.handleSearch} type="search" placeholder="Search" />
                </div>
              </form>
            </div>
            <div className="companies">
              {size === 0 ? (
                <h5>
                Search your company if it is already on Aexyn platform or
                  <a onClick={this.create} href="#"> Create a new one.</a>
                </h5>
              ) : null}
              {this.renderCompanies()}
            </div>
            {company_id ? (
              <center>
                <input onClick={this.next} type="button" className="company-selection-btn custom-btn" value="Next" />
                <i className="fa fa-angle-double-right" />
              </center>
            ) : null}

            <center>
              <input onClick={this.back} type="button" href="#" className="back-to-office-select" />
              <i className="fa fa-angle-double-left"> Back</i>
            </center>
          </div>
        </section>
      </div>
    );
  }
}

export default connect(
  state => ({
    companies: state.account.get('companies'),
    searchText: state.account.get('searchText'),
    company_id: state.account.get('company_id'),
  }),
  { load_company, mergeKeys },
)(Company);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import Header from '../components/header';
import Welcome from '../components/welcome';
import { mergeKeys } from '../state/action';
import OfficeFields from '../components/offfice-fields';

const OfficeForm = (props) => {
  const { handleSubmit, onSubmit } = props;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <OfficeFields />
    </form>
  );
};

const OfficeFormConnected = reduxForm({
  form: 'office',
})(OfficeForm);

class CompanySelect extends Component {
  next=() => {
  }

  back=() => this.props.mergeKeys({ step: 'COMPANY' });

  selectOffice= office_id => this.props.mergeKeys({ office_id });

  onSubmit=(values) => {
  }

  renderOffice=() => {
    const { companies, company_id } = this.props;
    const selected_company = companies.find(c => c.get('id') === company_id);
    if (!selected_company.size) {
      return null;
    }
    const offices = selected_company.get('offices').toJS();
    return (
      <ul className="clearfix">
        {offices.map(o => (<li onClick={() => this.selectOffice(o.office_id)} key={o.office_id}>{o.city}</li>))}
        <li className="menu-has-child">
          <a href="#">
            <i className="fa fa-plus" aria-hidden="true" />
          Enter a New
          Office Location
          </a>
        </li>
      </ul>
    );
  }

  render() {
    const { office_id } = this.props;
    return (
      <div>
        <Header />
        <section className="custom-account-container-wrapper">
          <Welcome />
          <div className="office-selection">
            <h5>
              Now, which
              <span className="office-name"> Office Name</span>
               office do you work out of?
            </h5>
            {this.renderOffice()}
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-12">
                  <div className="office-selection">
                    <h3>
                      <i className="fa fa-map-marker" aria-hidden="true" />
                      {' '}
                      New
                      Office
                    </h3>
                    <OfficeFormConnected onSubmit={this.onSubmit} />
                  </div>
                </div>
              </div>
            </div>
            {office_id ? (
              <center>
                <input
                  onClick={this.next}
                  type="button"
                  className="company-selection-btn custom-btn"
                  value="Next"
                />
                <i className="fa fa-angle-double-right" />
              </center>
            ) : null}

            <center>
              <input
                onClick={this.back}
                type="button"
                href="#"
                className="back-to-office-select"
              />
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
    company_id: state.account.get('company_id'),
    office_id: state.account.get('office_id'),
  }),
  { mergeKeys },
)(CompanySelect);

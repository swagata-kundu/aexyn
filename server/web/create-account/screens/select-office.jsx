import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import Header from '../components/header';
import Welcome from '../components/welcome';
import { mergeKeys, sign_up } from '../state/action';
import OfficeFields from '../components/offfice-fields';

const OfficeForm = (props) => {
  const { handleSubmit, onSubmit } = props;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <OfficeFields />
      <center>
        <button
          type="submit"
          className="company-selection-btn custom-btn"
        >
        Get Started
        </button>
      </center>
    </form>
  );
};

const OfficeFormConnected = reduxForm({
  form: 'office',
  destroyOnUnmount: false,
})(OfficeForm);

class CompanySelect extends Component {
  next = () => {};

  back = () => this.props.mergeKeys({ step: 'COMPANY', office_id: null });

  selectOffice = office_id => this.props.mergeKeys({ office_id });

  showOfficeForm = () => this.props.mergeKeys({ showOfficeForm: true, office_id: null });

  getStarted = () => {
    this.props.sign_up();
  };

  renderOffice = () => {
    const { companies, company_id } = this.props;
    const selected_company = companies.find(c => c.get('id') === company_id);
    if (!selected_company || !selected_company.size) {
      return null;
    }
    const offices = JSON.parse(selected_company.get('offices'));
    return (
      <ul className="clearfix">
        {offices.map(o => (
          <li onClick={() => this.selectOffice(o.office_id)} key={o.office_id}>
            {o.city}
          </li>
        ))}
        <li className="menu-has-child" onClick={this.showOfficeForm}>
          <a href="#">
            <i className="fa fa-plus" aria-hidden="true" />
            {' '}
Enter a New Office
            Location
          </a>
        </li>
      </ul>
    );
  };

  render() {
    const { office_id, showOfficeForm } = this.props;
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
            {showOfficeForm && (
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="office-selection">
                      <h3>
                        <i className="fa fa-map-marker" aria-hidden="true" />
                        {' '}
                        New Office
                      </h3>
                      <OfficeFormConnected onSubmit={this.getStarted} />
                    </div>
                  </div>
                </div>
              </div>
            )}
            {office_id && !showOfficeForm ? (
              <center>
                <button
                  type="submit"
                  className="company-selection-btn custom-btn"
                  onClick={this.getStarted}
                >
              Get Started
                </button>
              </center>
            ) : null}

            <center>
              <input
                onClick={this.back}
                type="button"
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
    showOfficeForm: state.account.get('showOfficeForm'),
  }),
  { mergeKeys, sign_up },
)(CompanySelect);

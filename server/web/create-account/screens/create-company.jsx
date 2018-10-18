import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import Header from '../components/header';
import Welcome from '../components/welcome';
import { mergeKeys } from '../state/action';
import OfficeFields from '../components/offfice-fields';

const CompanyForm = (props) => {
  const { handleSubmit, onSubmit } = props;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-field">
        <div className="label">
          <label>Name</label>
        </div>
        <div className="input">
          <Field component="input" type="text" required name="company_info.name" placeholder="name" />
        </div>
      </div>
      <div className="form-field">
        <div className="label">
          <label>Labor Type</label>
        </div>
        <div className="input">
          <Field
            required
            component="select"
            name="company_info.labour_type"
            placeholder="---- Select Labor Type ----"
          />
        </div>
      </div>
      <OfficeFields baseName="company_office" />
    </form>
  );
};

const PersonalInfoForm = () => (
  <form>
    <div className="form-field">
      <div className="label">
        <label>Job Title</label>
      </div>
      <div className="input">
        <Field component="input" type="text" name="job_title" placeholder="Job Title" />
      </div>
    </div>
    <div className="form-field">
      <div className="label">
        <label>Work Phone</label>
      </div>
      <div className="input">
        <Field component="input" type="text" name="work_phone" placeholder="Work Phone" />
      </div>
    </div>
    <div className="form-field">
      <div className="label">
        <label>Work Performed</label>
      </div>
      <div className="input">
        <Field
          required
          component="select"
          name="work_performed"
          placeholder="---- Select Labor Type ----"
        />
      </div>
    </div>
  </form>
);

const CompanyFormConnected = reduxForm({
  form: 'company',
})(CompanyForm);

const PersonalInfoFormConnected = reduxForm({
  form: 'info',
})(PersonalInfoForm);

class CreateCompany extends Component {
  next = () => {};

  back = () => this.props.mergeKeys({ step: 'COMPANY' });

  selectOffice = office_id => this.props.mergeKeys({ office_id });

  onSubmit = (values) => {};

  render() {
    return (
      <div>
        <Header />
        <section className="custom-account-container-wrapper">
          <Welcome />
          <div className="company-details">
            <h5>
              Please tell us a little more about your company and the work you
              do in commercial construction.
            </h5>
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-6">
                  <div className="company-information">
                    <h3>
                      <i className="fa fa-building-o" aria-hidden="true" />
                      Company Information
                    </h3>
                    <CompanyFormConnected onSubmit={this.onSubmit} />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="personal-information">
                    <h3>
                      <i className="fa fa-user-circle-o" aria-hidden="true" />
                      Personal Information
                    </h3>
                    <PersonalInfoFormConnected onSubmit={() => {}} />
                  </div>
                </div>
              </div>
            </div>
            <center>
              <a href="#" className="company-selection-btn custom-btn">
                Get Started
                {' '}
                <i className="fa fa-angle-double-right" />
              </a>
            </center>
          </div>
        </section>
      </div>
    );
  }
}

export default connect(null, { mergeKeys })(CreateCompany);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import Header from '../components/header';
import Welcome from '../components/welcome';
import { mergeKeys, sign_up } from '../state/action';
import OfficeFields from '../components/offfice-fields';
import MultiSelect from '../../components/multi-select';

const CompanyForm = (props) => {
  const {
    handleSubmit, onSubmit, labourTypes, workPerformed,
  } = props;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <div className="company-information">
              <h3>
                <i className="fa fa-building-o" aria-hidden="true" />
                {' '}
                       Company Information
              </h3>
              <div className="form-field">
                <div className="label">
                  <label>Name</label>
                </div>
                <div className="input">
                  <Field component="input" type="text" required name="company_info.name" placeholder="Name" />
                </div>
              </div>
              <div className="form-field">
                <div className="label">
                  <label>Labor Type</label>
                </div>
                <div className="input">
                  <Field
                    required
                    component={MultiSelect}
                    options={labourTypes}
                    name="company_info.labour_type"
                    placeholder="Labour Type"
                  />
                </div>
              </div>
              <OfficeFields baseName="company_office" />
            </div>
          </div>
          <PersonalInfoForm workPerformed={workPerformed} />
        </div>
      </div>
      <center>
        <button type="submit">Get Started</button>
      </center>
    </form>
  );
};

const PersonalInfoForm = (props) => {
  const { workPerformed } = props;
  return (
    <div className="col-sm-6">
      <div className="company-information">
        <h3>
          <i className="fa fa-building-o" aria-hidden="true" />
          {' '}
                       Personal Information
        </h3>
        {' '}
        <div className="form-field">
          <div className="label">
            <label>Job Title</label>
          </div>
          <div className="input">
            <Field component="input" required type="text" name="office_profile.job_title" placeholder="Job Title" />
          </div>
        </div>
        <div className="form-field">
          <div className="label">
            <label>Work Phone</label>
          </div>
          <div className="input">
            <Field component="input" required type="text" name="office_profile.work_phone" placeholder="Work Phone" />
          </div>
        </div>
        <div className="form-field">
          <div className="label">
            <label>Work Performed</label>
          </div>
          <div className="input">
            <Field
              required
              component={MultiSelect}
              options={workPerformed}
              name="office_profile.work_performed"
              placeholder="Work Performed"
            />

          </div>
        </div>
      </div>
    </div>
  );
};

const CompanyFormConnected = reduxForm({
  form: 'company',
  destroyOnUnmount: false,
})(CompanyForm);

class CreateCompany extends Component {
  next = () => {};

  back = () => this.props.mergeKeys({ step: 'COMPANY' });

  selectOffice = office_id => this.props.mergeKeys({ office_id });


  getStarted = () => {
    this.props.sign_up();
  };

  render() {
    const { common } = this.props;
    const labourType = common.labourType ? common.labourType : [];
    const workPerformed = common.workPerformed ? common.workPerformed : [];
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
            <CompanyFormConnected onSubmit={this.getStarted} labourTypes={labourType} workPerformed={workPerformed} />
            <center>
              <button onClick={this.back} type="submit">Back</button>
            </center>
          </div>
        </section>
      </div>
    );
  }
}

export default connect(state => ({
  common: state.common.get('masterData').toJS(),
}), { mergeKeys, sign_up })(CreateCompany);

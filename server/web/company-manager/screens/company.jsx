import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  reduxForm, Field, submit, reset,
} from 'redux-form';
import MultiSelect from '../../components/multi-select';
import Nav from '../components/nav';
import { get_company_info, update_company_info } from '../state/action';

const companyForm = (props) => {
  const {
    handleSubmit, onSubmit, labourTypes, disabled, businessType,
  } = props;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-field">
        <div className="label label-text">
          <label>Company Name</label>
        </div>
        <div className="input">
          <Field
            name="name"
            component="input"
            type="text"
            disabled={disabled}
            placeholder="Name"
          />
        </div>
      </div>
      <div className="form-field">
        <div className="label label-text">
          <label>Labor Type</label>
        </div>
        <div className="input">
          <Field
            required
            component={MultiSelect}
            options={labourTypes}
            name="labour_type"
            disabled={disabled}
            placeholder="Labour Type"
          />
        </div>
      </div>
      <div className="form-field">
        <div className="label label-text">
          <label>Business Type</label>
        </div>
        <div className="input">
          <Field
            required
            component={MultiSelect}
            options={businessType}
            name="business_type"
            disabled={disabled}
            placeholder="Business Type"
          />
        </div>
      </div>
      <div className="form-field">
        <div className="label label-text">
          <label>Website</label>
        </div>
        <div className="input">
          <Field
            name="websiteUrl"
            component="input"
            type="text"
            disabled={disabled}
            placeholder="Website"
          />
        </div>
      </div>
      <div className="form-field">
        <div className="label label-text">
          <label>Tagline</label>
        </div>
        <div className="input">
          <Field
            name="tagLine"
            component="textarea"
            disabled={disabled}
            placeholder="Tagline"
            type="text"
          />
        </div>
      </div>
      {/* <div className="form-field">
        <div className="label label-text">
          <label>Logo</label>
        </div>
        <div className="input">
          <input type="file" name="file" placeholder />
        </div>
      </div> */}
    </form>
  );
};


function mapStateToPropsCompanyForm(state) {
  const { company } = state;
  const {
    name, labour_type, business_type, tagLine, websiteUrl,
  } = company.companyInfo;
  const initialValues = {
    name, labour_type, business_type, tagLine, websiteUrl,
  };
  console.log(initialValues);
  return ({
    initialValues,
  });
}
const Form = connect(mapStateToPropsCompanyForm)(reduxForm({
  form: 'update-copmany',
  enableReinitialize: true,
})(companyForm));


class Company extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
    };
  }

  componentDidMount = () => {
    const { company_id } = this.props.userInfo;
    this.props.get_company_info(company_id);
  }

  submitForm= (values) => {
    const { userInfo } = this.props;
    this.props.update_company_info({ company_id: userInfo.company_id, data: values });
    this.setState({ isEdit: false });
  }

  cancelChange=() => {
    this.setState({ isEdit: false });
    this.props.reset('update-copmany');
    const { company_id } = this.props.userInfo;
    this.props.get_company_info(company_id);
  }

  saveChanges=() => {
    this.props.submit('update-copmany');
  }

  editForm=() => {
    this.setState({ isEdit: true });
  }

  render() {
    const { common } = this.props;
    const labourType = common.labourType ? common.labourType : [];
    const businessType = common.businessType ? common.businessType : [];

    const { isEdit } = this.state;

    return (
      <section
        className="custom-body-container-wrapper"
        style={{ paddingLeft: 50 }}
      >
        <div className="custom-body-container">
          <div className="custom-section">
            <div className="custom-sidebar-tab">
              <div className="custom-tabber-group ">
                <Nav heading="Company Profile" />
                <div className="section-bottom-group">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="add-office-info col-md-8">
                        <div className="top-bar">
                          <div className="row">
                            <div className="left-group col-md-8">
                              <p>Company Information</p>
                            </div>
                            <div className="right-group col-md-4">
                              <ul>
                                {isEdit ? <li><button type="button" onClick={this.cancelChange}>Cancel</button></li> : null}
                                {!isEdit ? <li><button type="button" onClick={this.editForm} className="custom-btn">Edit</button></li> : null}
                                {isEdit ? <li><button type="button" onClick={this.saveChanges} className="custom-btn">Save</button></li> : null}
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="bottom-group">
                          <Form
                            onSubmit={this.submitForm}
                            disabled={!isEdit}
                            labourTypes={labourType}
                            businessType={businessType}
                          />
                        </div>
                      </div>
                      <div className="office-profile col-md-4">
                        <div className="top-bar">
                          <h3>About profiles</h3>
                        </div>
                        <p>Keep your profile information up to date so that people can easily find you on Aexyn</p>
                        <a href="#">Preview your complete profile &gt;&gt;</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    userInfo: state.common.get('userInfo').toJS(),
    common: state.common.get('masterData').toJS(),
  };
}
export default connect(mapStateToProps, ({
  get_company_info, update_company_info, submit, reset,
}))(Company);

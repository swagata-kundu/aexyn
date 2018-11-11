import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, submit } from 'redux-form';
import { masterData } from '../../state/action';
import Nav from '../components/nav';
import OfficeFields from '../../create-account/components/offfice-fields';

const OfficeForm = (props) => {
  const { handleSubmit, onSubmit } = props;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <OfficeFields />
      <div className="form-field">
        <div className="label label-text">
          <label>Phone</label>
        </div>
        <div className="input">
          <Field
            name="phone_no"
            component="input"
            type="text"
            placeholder="Phone."
          />
        </div>
      </div>
      <div className="form-field">
        <div className="label label-text">
          <label>Fax</label>
        </div>
        <div className="input">
          <Field
            name="fax_no"
            component="input"
            type="text"
            placeholder="Fax."

          />
        </div>
      </div>
    </form>
  );
};

const OfficeFormConnected = reduxForm({
  form: 'office',
})(OfficeForm);

class CreateOffice extends Component {
    createOffice = (data) => {
      console.log('Form Submit', data);
    };

    back = () => {
      this.props.history.push('/offices');
    };

    submitForm=() => {
      this.props.submit('office');
    }

    componentDidMount() {
      this.props.masterData();
    }

    render() {
      return (
        <section
          className="custom-body-container-wrapper"
          style={{ paddingLeft: 50 }}
        >
          <div className="custom-body-container custom-section custom-sidebar-tab custom-tabber-group ">
            <Nav heading="Offices" />
            <div className="custom-company-section section-bottom-group container-fluid row">

              <div className="add-office-info col-md-8">
                <div className="top-bar">
                  <div className="row">
                    <div className="left-group col-md-8">
                      <p>Add Office Information</p>
                    </div>
                    <div className="right-group col-md-4">
                      <ul>
                          <li><button type="button" onClick={this.back}>Cancel</button></li>
                          <li className="green"><button type="button" onClick={this.submitForm} className="custom-btn">Save</button></li>
                        </ul>
                    </div>
                  </div>
                </div>
                <div className="bottom-group">
                  <OfficeFormConnected onSubmit={this.createOffice} />
                </div>
              </div>
              <div className="office-profile col-md-4">
                <div className="top-bar">
                  <h3>About profiles</h3>
                </div>
                <p>Keep your profile information up to date so that people can easily find you on Aexyn</p>
              </div>

            </div>

          </div>
        </section>
      );
    }
}

export default connect(null, { submit, masterData })(CreateOffice);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import Nav from '../components/nav';
import OfficeFields from '../../create-account/components/offfice-fields';
import { mergeKeys } from '../../create-account/state/action';

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
            name="phone"
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
            name="fax"
            component="input"
            type="text"
            placeholder="Fax."

          />
        </div>
      </div>
      <center>
        <button
          type="submit"
          className="company-selection-btn custom-btn"
        >
          Submit
        </button>
      </center>
    </form>
  );
};

const OfficeFormConnected = reduxForm({
  form: 'office',
  destroyOnUnmount: false,
})(OfficeForm);

class CreateOffice extends Component {
    getStarted = (data) => {
      console.log('Form Submit', data);
    };
    back = () => this.props.mergeKeys({ step: 'COMPANY' });

    render() {
      return (
        <section
          className="custom-body-container-wrapper"
          style={{ paddingLeft: 50 }}
        >
          <div className="custom-body-container">
            <div className="custom-section">
              <div className="custom-sidebar-tab">
                <div className="custom-tabber-group ">
                  <Nav heading="Offices" />
                  <div className="custom-company-section">
                    <div className="section-bottom-group">
                      <div className="container-fluid">
                        <div className="row">
                          <div className="add-office-info col-md-8">
                            <div className="top-bar">
                              <div className="row">
                                <div className="left-group col-md-8">
                                  <p>Add Office Information</p>
                                </div>
                                <div className="right-group col-md-4">
                                  <ul>
                                    <li><a href="val" onClick={this.back}>Cancel</a></li>
                                    <li className="green"><a className="custom-btn" href="save">Save</a></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="bottom-group">
                              <OfficeFormConnected onSubmit={this.getStarted} />
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

export default connect(null, { mergeKeys })(CreateOffice);

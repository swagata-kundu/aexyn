import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, submit } from 'redux-form';
import Nav from '../components/nav';
import OfficeFields from '../../create-account/components/offfice-fields';
import { addOffice } from '../state/action';

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
            placeholder="Phone No"
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
            placeholder="Fax No"

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
    createOffice = async (data) => {
      const { history, commonData } = this.props;
      const { company_id } = commonData;
      await addOffice(data, company_id);
      history.push('/offices');
    };

    back = () => {
      const { history } = this.props;
      history.push('/offices');
    };

    submitForm=() => {
      this.props.submit('office');
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

function mapStateToProps(state) {
  return {
    commonData: state.common.get('userInfo').toJS(),
  };
}

export default connect(mapStateToProps, { submit })(CreateOffice);

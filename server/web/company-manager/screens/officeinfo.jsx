import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, submit, reset } from 'redux-form';

import SideBar from '../components/sidebar';
import NavBar from '../components/officenav';
import { get_office_info, update_office_info } from '../state/action';
import { OfficeForm } from './addoffice';

const OfficeFormConnected = connect((state) => {
  const {
    name, address1, address2, city, zip, state_id, phone_no, fax_no, country_id,
  } = state.company.officeInfo;
  return ({
    initialValues: {
      name, address1, address2, city, zip, state_id, phone_no, fax_no, country_id,
    },
  });
})(reduxForm({
  form: 'office-info',
  enableReinitialize: true,
})(OfficeForm));

class OfficeInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
    };
  }

  componentDidMount = () => {
    this.loadInitialData();
  }

  loadInitialData=() => {
    const { office_id } = this.props.match.params;
    this.props.get_office_info(office_id);
  }

  submitForm= (values) => {
    const { office_id } = this.props.match.params;
    this.props.update_office_info({ office_id, data: values });
    this.setState({ isEdit: false });
  }

  cancelChange=() => {
    this.setState({ isEdit: false });
    this.props.reset('office-info');
    this.loadInitialData();
  }

  saveChanges=() => {
    debugger;
    this.props.submit('office-info');
  }

  editForm=() => {
    this.setState({ isEdit: true });
  }

  render() {
    const { isEdit } = this.state;
    const { match } = this.props;
    const { office_id } = match.params;

    return (
      <section className="custom-body-container-wrapper" style={{ paddingLeft: '50px' }}>
        <div className="custom-body-container">
          <div className="custom-questionnaire-section">
            <SideBar />
            <div className="custom-right-group">
              <NavBar office_id={office_id} />

              <div className="section-bottom-group">
                <div className="container-fluid">
                  <div className="row">
                    <div className="add-office-info col-md-8">
                      <div className="top-bar">
                        <div className="row">
                          <div className="left-group col-md-8">
                            <p>Office Information</p>
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
                        <OfficeFormConnected
                          onSubmit={this.submitForm}
                          disabled={!isEdit}
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
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    userInfo: state.common.get('userInfo').toJS(),
  };
}
export default connect(mapStateToProps, {
  get_office_info, submit, reset, update_office_info,
})(OfficeInfo);

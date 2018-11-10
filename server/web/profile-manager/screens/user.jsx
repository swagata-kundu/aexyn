import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submit } from 'redux-form';
import { load_user_profile } from '../state/action';
import { masterData } from '../../state/action';
import { change_user_info_service } from '../../service/profile';
import Nav from '../components/nav';
import UserForm from '../components/user-form';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
    };
  }

  componentDidMount() {
    const { userInfo } = this.props;
    this.props.load_user_profile(userInfo.id);
    this.props.masterData();
  }

  submitForm=async (values) => {
    const { userInfo } = this.props;
    try {
      await change_user_info_service({ user_id: userInfo.id, values });
      this.setState({ isEdit: false });
    } catch (error) {}
  }

  cancelChange=() => {
    const { userInfo } = this.props;
    this.setState({ isEdit: false });
    this.props.load_user_profile(userInfo.id);
  }

  saveChanges=() => {
    this.props.submit('update-userprofile');
  }

  editForm=() => {
    this.setState({ isEdit: true });
  }

  render() {
    const { isEdit } = this.state;
    return (
      <div className="custom-section">
        <Nav heading="Profile Settings" />
        <div className="section-bottom-group">
          <div className="container-fluid">
            <div className="row">
              <div className="add-office-info col-md-8">
                <div className="top-bar">
                  <div className="row">
                    <div className="left-group col-md-8">
                      <p>Personal Info</p>
                    </div>
                    <div className="right-group col-md-4">
                      <ul>
                        <li><button type="button" onClick={this.cancelChange}>Cancel</button></li>
                        {!isEdit ? <li><button type="button" onClick={this.editForm} className="custom-btn">Edit</button></li> : null}
                        {isEdit ? <li><button type="button" onClick={this.saveChanges} className="custom-btn">Save</button></li> : null}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bottom-group">
                  <UserForm onSubmit={this.submitForm} disabled={!isEdit} />
                </div>
              </div>
              <div className="office-profile col-md-4">
                <div className="top-bar">
                  <h3>About profiles</h3>
                </div>
                <p>Keep your profile information up to date so that people can easily find you on Aexyn</p>
                <a href="#" className="popup-btn">Preview your complete profile &gt;&gt;</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(state => ({
  profile: state.profile,
  userInfo: state.common.get('userInfo').toJS(),

}), ({ load_user_profile, masterData, submit }))(User);

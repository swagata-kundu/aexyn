import React, { Component } from 'react';
import { connect } from 'react-redux';
import { load_user_profile } from '../state/action';
import { masterData } from '../../state/action';
import Nav from '../components/nav';
import UserForm from '../components/user-form';

class User extends Component {
  componentDidMount() {
    const { userInfo } = this.props;
    this.props.load_user_profile(userInfo.id);
    this.props.masterData();
  }

  render() {
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
                        <li><a href>Cancel</a></li>
                        <li className="green"><a className="custom-btn" href>Save</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bottom-group">
                  <UserForm onSubmit={() => {}} disabled />
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

}), ({ load_user_profile, masterData }))(User);

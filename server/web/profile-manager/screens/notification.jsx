import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import MultiSelect from '../../components/multi-select';
import {
  load_user_profile, change_notification_preference,
  get_all_company, change_user_preference_state_only,
} from '../state/action';
import Nav from '../components/nav';


const NotificationForm = (props) => {
  const {
    handleSubmit, onSubmit, companies, changePersonalPreference,
    notification_preference, onCancel,
  } = props;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-field left-label">
        <div className="label-text">
          <input type="radio" value="ALL" onChange={changePersonalPreference} checked={notification_preference === 'ALL'} />
        </div>
        <div className="input-field">
          <label htmlFor="All">I Would like email notifications for all messages and RFPs that are sent to me.</label>
        </div>
      </div>
      <div className="form-field left-label">
        <div className="label-text">
          <input type="radio" value="ALLOWED" onChange={changePersonalPreference} checked={notification_preference === 'ALLOWED'} />

        </div>
        <div className="input-field">
          <label htmlFor="Custom List include">I want to specify who can send me email notifications.</label>
          <Field
            component={MultiSelect}
            options={companies}
            type="text"
            name="allowed"
            placeholder="Companies"
          />
        </div>
      </div>
      <div className="form-field left-label">
        <div className="label-text">
          <input type="radio" value="BLOCKED" onChange={changePersonalPreference} checked={notification_preference === 'BLOCKED'} />

        </div>
        <div className="input-field">
          <label htmlFor="Custom List exclude">I want to specify who can't send me email notifications.</label>
          <Field
            component={MultiSelect}
            options={companies}
            type="text"
            name="blocked"
            placeholder="Companies"
          />
        </div>
      </div>
      <div className="botton-group">
        <ul>
          <li className="cancel"><button onClick={onCancel} type="button">Cancel</button></li>
          <li className="save"><button type="submit">Save</button></li>
        </ul>
      </div>
    </form>);
};

const NotificationFormConnected = connect(state => ({
  initialValues: state.profile.notification_preferences,
}))(
  reduxForm({
    form: 'update-notofication',
    enableReinitialize: true,
  })(NotificationForm),
);

class Notification extends Component {
  changePersonalPreference=(e) => {
    this.props.change_user_preference_state_only({
      notification_preference: e.target.value,
    });
  }

  componentDidMount() {
    const { userInfo } = this.props;
    this.props.load_user_profile(userInfo.id);
    this.props.get_all_company();
  }

  cancel=() => {
    const { userInfo } = this.props;
    debugger;

    this.props.load_user_profile(userInfo.id);
  }

  save=(values) => {
    debugger;
    const { userInfo } = this.props;
    const { profile } = this.props;
    const { user_preferences } = profile;
    const { notification_preference } = user_preferences;
    this.props.change_notification_preference(userInfo.id, { notification_preference }, values);
  }

  render() {
    const { profile } = this.props;
    const { companies, user_preferences } = profile;
    const { notification_preference } = user_preferences;
    return (
      <div className="custom-section">
        <Nav heading="Notification Settings" />
        <div className="notification-preferences section-bottom-group">
          <div className="container-fluid">
            <div className="row">
              <div className="notification-inner">
                <NotificationFormConnected
                  companies={companies}
                  onSubmit={this.save}
                  changePersonalPreference={this.changePersonalPreference}
                  notification_preference={notification_preference}
                  onCancel={this.cancel}
                />
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

}),
  ({
    load_user_profile,
    change_notification_preference,
    get_all_company,
    change_user_preference_state_only,
  }))(Notification);

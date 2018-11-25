import React, { Component } from 'react';
import { connect } from 'react-redux';
import { load_user_profile, change_user_preference, change_user_primary_office } from '../state/action';
import Nav from '../components/nav';
import ChangePassword from '../components/change-password';

class Account extends Component {
  componentDidMount() {
    const { userInfo } = this.props;
    this.props.load_user_profile(userInfo.id);
  }

  changePreference=(e) => {
    const params = {
      [e.target.name]: e.target.value,
    };
    const { userInfo } = this.props;
    this.props.change_user_preference({
      user_id: userInfo.id,
      params,
    });
  }

  changePrimaryOffice=(e) => {
    const { userInfo } = this.props;
    this.props.change_user_primary_office(e.target.value, userInfo.id);
  }

  render() {
    const { userInfo, profile } = this.props;
    const {
      allLinkedOffices, office_profile, user_preferences, user_info,
    } = profile;
    const { start_page, tz } = user_preferences;
    const office_options = allLinkedOffices.map(o => ({ id: o.office_id, name: o.city }));

    return (
      <div className="custom-section">
        <Nav heading="Account Settings" />
        <div className="section-bottom-group">
          <div className="container-fluid">
            <div className="row">
              <div className="add-office-info account-settings col-md-12">
                <div className="top-bar">
                  <div className="row">
                    <div className="left-group col-md-8">
                      <p>COMPANY</p>
                    </div>
                  </div>
                </div>
                <div className="bottom-group">
                  <form>
                    <div className="form-field">
                      <div className="label label-text">
                        <label>Company Name</label>
                      </div>
                      <div className="input">
                        <div className="field-text"><span className="office-name">{userInfo.company_name}</span></div>
                      </div>
                    </div>
                    <div className="form-field">
                      <div className="label label-text">
                        <label>Primary Office</label>
                      </div>
                      <div className="input">
                        <select onChange={this.changePrimaryOffice} value={office_profile.office_id}>
                          {office_options.map(o => <option key={o.id} value={o.id}>{o.name}</option>)}
                        </select>
                        <small>
  You must belongs to an office to make it your primary office. Change your office or join additional offices in
                          <a href="#">company settings.</a>
                        </small>
                      </div>
                    </div>
                    <div className="form-field">
                      <div className="label label-text">
                        <label>Primary Work Email</label>
                      </div>
                      <div className="input">
                        <div className="field-text">{user_info.email}</div>
                        <small>
  Your primary email will be displayed on your profile.
                          <br />
                          {' '}
  All emails from Aexyn will be sent to this address.
                        </small>
                      </div>
                    </div>
                    <div className="form-field">
                      <div className="label label-text">
                        <label>Leave Company</label>
                      </div>
                      <div className="input">
                        <small>
To leave
                          {' '}
                          <span className="company-name">{userInfo.company_name}</span>
                          {' '}
remove yourself from the
                          {' '}
                          <a href="#">Employees Table.</a>
                        </small>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="top-bar">
                  <div className="row">
                    <div className="left-group col-md-8">
                      <p>OTHER</p>
                    </div>
                  </div>
                </div>
                <div className="bottom-group">
                  <form>
                    <div className="form-field">
                      <div className="label label-text">
                        <label>Start Page</label>
                      </div>
                      <div className="input">
                        <select value={start_page} name="start_page" onChange={this.changePreference}>
                          <option value="PM">Project Manager</option>
                          <option value="OM">Opportunity Manager</option>
                          <option value="QM">Qualification Manager</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-field">
                      <div className="label label-text">
                        <label>Time Zone</label>
                      </div>
                      <div className="input">
                        <select value={tz} name="tz" onChange={this.changePreference}>
                          <option value="-12:00">(GMT -12:00) Eniwetok, Kwajalein</option>
                          <option value="-11:00">(GMT -11:00) Midway Island, Samoa</option>
                          <option value="-10:00">(GMT -10:00) Hawaii</option>
                          <option value="-09:50">(GMT -9:30) Taiohae</option>
                          <option value="-09:00">(GMT -9:00) Alaska</option>
                          <option value="-08:00">(GMT -8:00) Pacific Time (US &amp; Canada)</option>
                          <option value="-07:00">(GMT -7:00) Mountain Time (US &amp; Canada)</option>
                          <option value="-06:00">(GMT -6:00) Central Time (US &amp; Canada), Mexico City</option>
                          <option value="-05:00">(GMT -5:00) Eastern Time (US &amp; Canada), Bogota, Lima</option>
                          <option value="-04:50">(GMT -4:30) Caracas</option>
                          <option value="-04:00">(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz</option>
                          <option value="-03:50">(GMT -3:30) Newfoundland</option>
                          <option value="-03:00">(GMT -3:00) Brazil, Buenos Aires, Georgetown</option>
                          <option value="-02:00">(GMT -2:00) Mid-Atlantic</option>
                          <option value="-01:00">(GMT -1:00) Azores, Cape Verde Islands</option>
                          <option value="+00:00">(GMT) Western Europe Time, London, Lisbon, Casablanca</option>
                          <option value="+01:00">(GMT +1:00) Brussels, Copenhagen, Madrid, Paris</option>
                          <option value="+02:00">(GMT +2:00) Kaliningrad, South Africa</option>
                          <option value="+03:00">(GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg</option>
                          <option value="+03:50">(GMT +3:30) Tehran</option>
                          <option value="+04:00">(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi</option>
                          <option value="+04:50">(GMT +4:30) Kabul</option>
                          <option value="+05:00">(GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent</option>
                          <option value="+05:50">(GMT +5:30) Bombay, Calcutta, Madras, New Delhi</option>
                          <option value="+05:75">(GMT +5:45) Kathmandu, Pokhara</option>
                          <option value="+06:00">(GMT +6:00) Almaty, Dhaka, Colombo</option>
                          <option value="+06:50">(GMT +6:30) Yangon, Mandalay</option>
                          <option value="+07:00">(GMT +7:00) Bangkok, Hanoi, Jakarta</option>
                          <option value="+08:00">(GMT +8:00) Beijing, Perth, Singapore, Hong Kong</option>
                          <option value="+08:75">(GMT +8:45) Eucla</option>
                          <option value="+09:00">(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk</option>
                          <option value="+09:50">(GMT +9:30) Adelaide, Darwin</option>
                          <option value="+10:00">(GMT +10:00) Eastern Australia, Guam, Vladivostok</option>
                          <option value="+10:50">(GMT +10:30) Lord Howe Island</option>
                          <option value="+11:00">(GMT +11:00) Magadan, Solomon Islands, New Caledonia</option>
                          <option value="+11:50">(GMT +11:30) Norfolk Island</option>
                          <option value="+12:00">(GMT +12:00) Auckland, Wellington, Fiji, Kamchatka</option>
                          <option value="+12:75">(GMT +12:45) Chatham Islands</option>
                          <option value="+13:00">(GMT +13:00) Apia, Nukualofa</option>
                          <option value="+14:00">(GMT +14:00) Line Islands, Tokelau</option>
                        </select>
                      </div>
                    </div>
                  </form>
                </div>
                <ChangePassword />
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

}), ({ load_user_profile, change_user_preference, change_user_primary_office }))(Account);

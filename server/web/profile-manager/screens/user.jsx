import React from 'react';
import Nav from '../components/nav';

const User = () => (

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
              <form>
                <div className="form-field">
                  <div className="label label-text">
                    <label>First Name</label>
                  </div>
                  <div className="input">
                    <input type="text" name="firstname" placeholder />
                  </div>
                </div>
                <div className="form-field">
                  <div className="label label-text">
                    <label>Last Name</label>
                  </div>
                  <div className="input">
                    <input type="text" name="lastname" placeholder />
                  </div>
                </div>
                <div className="form-field">
                  <div className="label label-text">
                    <label>Job Title</label>
                  </div>
                  <div className="input">
                    <input type="text" name="jobtitle" placeholder />
                  </div>
                </div>
                <div className="form-field">
                  <div className="label label-text">
                    <label>Word Phone</label>
                  </div>
                  <div className="input">
                    <input type="text" name="wordphone" placeholder />
                  </div>
                </div>
                <div className="form-field">
                  <div className="label label-text">
                    <label>Cell Phone</label>
                  </div>
                  <div className="input">
                    <input type="text" name="cellphone" placeholder />
                  </div>
                </div>
                <div className="form-field">
                  <div className="label label-text">
                    <label>Work Performed</label>
                  </div>
                  <div className="input">
                    <input type="text" name="workperformed" placeholder />
                  </div>
                </div>
                <div className="form-field">
                  <div className="label label-text">
                    <label>Profile Photo</label>
                  </div>
                  <div className="input">
                    <input type="file" name="file" placeholder />
                  </div>
                </div>
              </form>
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

export default User;

import React from 'react';
import Nav from '../components/nav';

const Account = () => (

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
                    <div className="field-text"><span className="office-name">Karvi</span></div>
                  </div>
                </div>
                <div className="form-field">
                  <div className="label label-text">
                    <label>Primary Office</label>
                  </div>
                  <div className="input">
                    <select>
                      <option value="Item-1">Item-1 </option>
                      <option value="Item-2">Item-2</option>
                      <option value="Item-3">item-3</option>
                    </select>
                    <small>
You must belongs to an office to make it your primary office. Change your office or join additional offices in
                      {' '}
                      <a href="#">company settings.</a>
                    </small>
                  </div>
                </div>
                <div className="form-field">
                  <div className="label label-text">
                    <label>Primary Work Email</label>
                  </div>
                  <div className="input">
                    <div className="field-text">nishant@karvi.com</div>
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
                      <span className="company-name">AA</span>
                      {' '}
printers, remove yourself from the
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
                    <select>
                      <option value="project Manager">
Project Manager
                      </option>
                      <option value="Opportunity Manager">opportunity Manager</option>
                      <option value="Qualification Manager">Qualification Manager</option>
                    </select>
                  </div>
                </div>
                <div className="form-field">
                  <div className="label label-text">
                    <label>Time Zone</label>
                  </div>
                  <div className="input">
                    <select>
                      <option value="Iten-1">
Item-1
                      </option>
                      <option value="Item-2">Item-2</option>
                      <option value="Item-3">Item-3</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
            <div className="top-bar">
              <div className="row">
                <div className="left-group col-md-8">
                  <p>PASSWORD</p>
                </div>
              </div>
            </div>
            <div className="bottom-group">
              <form>
                <div className="form-field">
                  <div className="label label-text">
                    <label>Old Password</label>
                  </div>
                  <div className="input">
                    <input type="text" name="oldpassword" placeholder />
                  </div>
                </div>
                <div className="form-field">
                  <div className="label label-text">
                    <label>New Password</label>
                  </div>
                  <div className="input">
                    <input type="text" name="newpassword" placeholder />
                  </div>
                </div>
                <div className="form-field">
                  <div className="label label-text">
                    <label>Confirm Password</label>
                  </div>
                  <div className="input">
                    <input type="text" name="confirmpassword" placeholder />
                  </div>
                  <div className="buttom-group text-right">
                    <button type="submit">Change Password</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

);

export default Account;

import React from 'react';
import Nav from '../components/nav';

const Notification = () => (

  <div className="custom-section">
    <Nav heading="Notification Settings" />
    <div className="notification-preferences section-bottom-group">
      <div className="container-fluid">
        <div className="row">
          <div className="notification-inner">
            <div>
              <form>
                <div>
                  <div className="form-field left-label">
                    <div className="label-text"><input type="radio" name="notificationpreferences" defaultValue="All" defaultChecked="checked" /></div>
                    <div className="input-field">
                      {' '}
                      <label htmlFor="All">I Would like email notifications for all messages and RFPs that are sent to me.</label>
                    </div>
                  </div>
                  <div className="form-field left-label">
                    <div className="label-text"><input type="radio" name="notificationpreferences" defaultValue="Custom List include" /></div>
                    <div className="input-field">
                      <label htmlFor="Custom List include">I want to specify who can send me email notifications.</label>
                      <select>
                        <option> - select - </option>
                      </select>
                    </div>
                  </div>
                  <div className="form-field left-label">
                    <div className="label-text"><input type="radio" name="notificationpreferences" defaultValue="Custom List exclude" /></div>
                    <div className="input-field">
                      <label htmlFor="Custom List exclude">I want to specify who can't send me email notifications.</label>
                      <select>
                        <option> - select - </option>
                      </select>
                    </div>
                  </div>
                  <div className="botton-group">
                    <ul>
                      <li className="cancel"><button type="submit">Cancel</button></li>
                      <li className="save"><button type="submit">Save</button></li>
                    </ul>
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

export default Notification;

import React from 'react';

const JunglePermission = () => (
  <div className="custom-permission-jungles-group custom-axeyn-tabber-item">
    <div className="container-fluid">
      <div className="row">
        <div className="jungle-left-group col-md-7">
          <h1>Access to invitations from Jungles</h1>
          <p>
            Set up which coworkers can fill out and submit qualification
            application and revise previously submitted application.
          </p>
          <form>
            <div className="form-field">
              <input type="radio" name defaultValue /> Anyone at{' '}
              <span className="company-name">Karvi</span> can view/respond to
              invites
              <br />
              <input type="radio" name defaultValue defaultChecked /> Only
              designated team member can access application
            </div>
          </form>
          <h6>Individual access to invitation</h6>
          <form className="invitation-form">
            <div className="form-field">
              <input type="text" placeholder="Add a coworker" />
              <button>+</button>
            </div>
          </form>
          <div className="jungle-bottom-group">
            <table>
              <tbody>
                <tr>
                  <th>
                    Name{' '}
                    <span className="sort">
                      <i className="fa fa-sort-asc" aria-hidden="true" />
                    </span>
                  </th>
                  <th>Remove</th>
                </tr>
                <tr className="access-to-jungle">
                  <td>
                    <div className="member-detail">
                      <div className="icon-group">
                        <span className="member-icon">AT</span>
                      </div>
                      <div className="detail-group">
                        <a href="#" className="member-name">
                          Aman Talwar
                        </a>
                        <small className="designation">Director</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="remove-ico">
                      <i className="fa fa-times-circle" aria-hidden="true" />
                    </span>
                  </td>
                </tr>
                <tr className="access-to-jungle">
                  <td>
                    <div className="member-detail">
                      <div className="icon-group">
                        <span className="member-icon">N</span>
                      </div>
                      <div className="detail-group">
                        <a href="#" className="member-name">
                          Nishant
                        </a>
                        <small className="designation">Director</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="remove-ico">
                      <i className="fa fa-times-circle" aria-hidden="true" />
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="jungle-right-group col-md-5">
          <h6>Invitation Permission</h6>
          <table>
            <tbody>
              <tr>
                <th />
                <th>Access</th>
              </tr>
              <tr>
                <td>Fill out qualification applications</td>
                <td>
                  <i className="fa fa-check" aria-hidden="true" />
                </td>
              </tr>
              <tr>
                <td>Review and revise previously submitted applications</td>
                <td>
                  <i className="fa fa-check" aria-hidden="true" />
                </td>
              </tr>
              <tr>
                <td>Grant application access to coworkers</td>
                <td>
                  <i className="fa fa-check" aria-hidden="true" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

export default JunglePermission;
import React from 'react';

const SupplierPermission = () => (
  <div className="custom-permission-supplier-group custom-axeyn-tabber-item">
    <div className="container-fluid">
      <div className="row">
        <div className="jungle-left-group col-md-7">
          <h1>Reviewer Permissions</h1>
          <p>Set up who can reviewand see qualification applications.</p>
          <form>
            <div className="four-col-permission-form clearfix">
              <div className="column-1">
                <div className="label">
                  <label>Add a coworker</label>
                </div>
                <div className="input-field">
                  <select>
                    <option>Aman</option>
                  </select>
                </div>
              </div>
              <div className="column-2">
                <div className="input-field">
                  <select>
                    <option>View only</option>
                  </select>
                </div>
              </div>
              <div className="column-3">
                <input type="checkbox" name /> <strong>Auto add</strong>
              </div>
              <div className="column-4">
                <button>+ Add</button>
              </div>
            </div>
            <p className="form-bottom-text">
              <strong>Everyone else</strong> as{' '}
              <span className="company-name">Karvi</span> has
              <select>
                <option>No Access</option>
                <option>View Only Access</option>
                <option>Limited Access</option>
                <option>Admin Access</option>
              </select>{' '}
              to all qualification applications.
            </p>
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
                  <th>Permission</th>
                  <th>Auto-Add</th>
                  <th>Remove</th>
                </tr>
                <tr className="reviewer-permissions">
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
                    <div className="select-field">
                      <select>
                        <option value>Admin</option>
                      </select>
                    </div>
                  </td>
                  <td>
                    <input type="checkbox" name />
                  </td>
                  <td>
                    <span className="remove-ico">
                      <i className="fa fa-times-circle" aria-hidden="true" />
                    </span>
                  </td>
                </tr>
                <tr className="reviewer-permissions">
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
                    <div className="select-field">
                      <select>
                        <option value>Admin</option>
                      </select>
                    </div>
                  </td>
                  <td>
                    <input type="checkbox" name />
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
          <h6>Permission Levels</h6>
          <table>
            <tbody>
              <tr>
                <th />
                <th>View only</th>
                <th>Limited</th>
                <th>Admin</th>
              </tr>
              <tr>
                <td>
                  View submitted applications
                  <br /> (excluding financial info)
                </td>
                <td>
                  <i className="fa fa-check" aria-hidden="true" />
                </td>
                <td>
                  <i className="fa fa-check" aria-hidden="true" />
                </td>
                <td>
                  <i className="fa fa-check" aria-hidden="true" />
                </td>
              </tr>
              <tr>
                <td>Invite to qualify and send reminders</td>
                <td />
                <td>
                  <i className="fa fa-check" aria-hidden="true" />
                </td>
                <td>
                  <i className="fa fa-check" aria-hidden="true" />
                </td>
              </tr>
              <tr>
                <td>
                  Review applications and internal notes
                  <br /> (excluding financial info)
                </td>
                <td />
                <td>
                  <i className="fa fa-check" aria-hidden="true" />
                </td>
                <td>
                  <i className="fa fa-check" aria-hidden="true" />
                </td>
              </tr>
              <tr>
                <td>Customize the application questionnaire</td>
                <td />
                <td />
                <td>
                  <i className="fa fa-check" aria-hidden="true" />
                </td>
              </tr>
              <tr>
                <td>Review financial information</td>
                <td />
                <td />
                <td>
                  <i className="fa fa-check" aria-hidden="true" />
                </td>
              </tr>
              <tr>
                <td>Approve/Deny applications</td>
                <td />
                <td />
                <td>
                  <i className="fa fa-check" aria-hidden="true" />
                </td>
              </tr>
              <tr>
                <td>Modify settings and permissions</td>
                <td />
                <td />
                <td>
                  <i className="fa fa-check" aria-hidden="true" />
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            <strong>Auto add</strong> is the option to add a team member to
            every new applications.
          </p>
          <p>
            To see a coworker's name in the list of reviewers, you must add them
            indivisually.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default SupplierPermission;

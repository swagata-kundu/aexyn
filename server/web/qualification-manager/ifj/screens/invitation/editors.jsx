import React from 'react';

const Editors = () => (


  <div className="custom-editor-group">
    <div className="container-fluid">
      <div className="row">
        <div className="custom-editors-section col-md-8">
          <div className="editors-top-group clearfix">
            <div className="left-group">
              <h3>Editors</h3>
            </div>
            <div className="right-group">
              <form className="custom-add-review-form">
                <div className="custom-review-form-inner">
                  <input type="text" placeholder="Add coworker by name" />
                  <button type="Submit">+</button>
                </div>
              </form>
            </div>
          </div>
          <div className="editors-bottom-group">
            <table>
              <tbody>
                <tr>
                  <th>
Name
                    {' '}
                    <span className="sort"><i className="fa fa-sort-asc" aria-hidden="true" /></span>
                  </th>
                  <th>Editor Status</th>
                  <th>Actions</th>
                </tr>
                <tr>
                  <td>
                    <div className="member-detail">
                      <div className="icon-group">
                        <span className="member-icon">NK</span>
                      </div>
                      <div className="detail-group">
                        <a href="#" className="member-name">Nishant Kataria</a>
                        <small className="designation">Director</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="viewed-status">Viewed</div>
                    <div className="meta-date">11/10/18</div>
                  </td>
                  <td>
                    <ul className="custom-client-action-section">
                      <li className="action-drop-down active">
                        <i className="fa fa-angle-down" />
                        <ul>
                              <li>
                                <a href="#">
                                  <span className="remove-editor"><i className="fa fa-times-circle" aria-hidden="true" /></span>
                                  {' '}
Remove Editor
                                </a>

                              </li>
                            </ul>
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="editor-right-group col-md-4">
          <div className="editor-right-content clearfix">
            <div className="icon-group">
              <i className="fa fa-lock" aria-hidden="true" />
            </div>
            <div className="content-group">
              <p>
Only selected indivituals at
                {' '}
                <span className="company-name">Trial</span>
                {' '}
have access to view and edit this questionnaire.
              </p>
              <a href="#" className="security-settings">Change your Security Settings &gt;&gt;</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


);

export default Editors;

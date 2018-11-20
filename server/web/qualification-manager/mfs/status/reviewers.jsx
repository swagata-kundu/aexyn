import React, { Component } from 'react';

class Reviewers extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="custom-application-tabber-item">
        <div className="custom-application-top-row">
          <div className="custom-application-top-row-item under-review">
            <div className="top-row-left-content">
Application under review
              <span>
(
                <span className="review-number">0</span>
                {' '}
of
                {' '}
                <span className="total-review">1</span>
                {' '}
complete)
              </span>
            </div>
            <a className="pull-to-right complete-review-btn" href="#">Complete My Review</a>
          </div>
        </div>
        <div className="custom-application-reviewer-section">
          <div className="application-reviewer-top-group clearfix">
            <div className="left-group">
              <h3>Reviewers</h3>
            </div>
            <div className="right-group">
              <form className="custom-add-review-form">
                <div className="custom-review-form-inner">
                  <input type="text" name placeholder="Add coworker by name" />
                  <button type="Submit">+</button>
                </div>
              </form>
            </div>
          </div>
          <div className="application-reviewer-bottom-group">
            <table>
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>Review Status</th>
                  <th>Action</th>
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
                    <div className="invite-status">Invited</div>
                    <div className="meta-date">11/10/18</div>
                  </td>
                  <td>
                    <ul className="custom-client-action-section">
                      <li className="action-drop-down active">
                        <i className="fa fa-angle-down" />
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fa fa-object-ungroup" aria-hidden="true" />
Group with...
                            </a>

                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-exchange" aria-hidden="true" />
Change Status
                            </a>

                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-credit-card" aria-hidden="true" />
Archive
                            </a>

                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-trash-o" aria-hidden="true" />
Delete
                            </a>

                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-clone" aria-hidden="true" />
Create a copy
                            </a>

                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-print" aria-hidden="true" />
Print
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
      </div>


    );
  }
}

export default Reviewers;

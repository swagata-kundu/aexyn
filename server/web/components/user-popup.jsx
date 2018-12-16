import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

class UserPopup extends Component {
  componentDidMount() {}

  render() {
    const b = 1;
    return null;
    return (
      <Modal.Dialog>
        <Modal.Body className="company-profile-popup modal-dialog">

          <div className="company-profile-preview-group">
            <div className="popup-header">
              <div className="company-detail clearfix">
                <span className="icon-group">
                  <i className="fa fa-building-o" aria-hidden="true" />
                </span>
                <span className="content-group">
                  <h3><span className="company-name">Aexyn</span></h3>
                </span>
              </div>
            </div>
            <div className="popup-main-content">
              <div className="left-group">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6">
                      <h3>About</h3>
                    </div>
                    <div className="col-md-6 text-right">
                      <a href className="transparent-btn suggest-an-edit">Suggest an Edit</a>
                    </div>
                    <div className="col-md-12">
                      <div className="company-information">
                        <div className="company-information-item clearfix">
                          <div className="label">Website</div>
                          <div className="info">--</div>
                        </div>
                        <div className="company-information-item clearfix">
                          <div className="label">Labor Type</div>
                          <div className="info">
                            <ul>
                              <li>Union</li>
                              <li>Non-Union</li>
                            </ul>
                          </div>
                        </div>
                        <div className="company-information-item clearfix">
                          <div className="label">Buisness Type</div>
                          <div className="info">
                            <ul>
                              <li>General Contractor</li>
                              <li>Non-Union</li>
                            </ul>
                          </div>
                        </div>
                        <div className="company-popup-left-bottom">
                          <h3>
Locations (
                            <span className="number-of-office">1</span>
                            {' '}
office)
                          </h3>
                          <form>
                            <select>
                              <option>Delhi</option>
                              <option>Mumbai</option>
                              <option>Haryana</option>
                            </select>
                          </form>
                          <div className="map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.021314062398!2d77.3781287145596!3d28.62912329098716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff845df14d9%3A0xa0a97bdb85d0a42f!2sWorkWings!5e0!3m2!1sen!2sin!4v1542553938092" width={600} height={250} frameBorder={0} style={{ border: 0 }} allowFullScreen />
                          </div>
                          <div className="company-popup-contact-detail">
                            <div className="item clearfix">
                              <span className="icon"><i className="fa fa-location-arrow" aria-hidden="true" /></span>
                              <span className="content">
                                <span className="location">Location</span>
                              </span>
                            </div>
                            <div className="item clearfix">
                              <span className="icon"><i className="fa fa-phone" aria-hidden="true" /></span>
                              <span className="content">
                                <span className="phone-num">Phone Number</span>
                              </span>
                            </div>
                            <div className="item clearfix">
                              <span className="icon"><i className="fa fa-fax" aria-hidden="true" /></span>
                              <span className="content">
                                <span className="fax-num">Fax Number</span>
                              </span>
                            </div>
                            <div className="item clearfix">
                              <span className="icon"><i className="fa fa-user-circle-o" aria-hidden="true" /></span>
                              <div className="content">
                                <div className="employee">
                                  <span className="number-of-employee">2</span>
                                  <span className="hide-employee">
Hide
                                      Employee

                                  </span>
                                  <div className="member-detail clearfix">
                                    <span className="icon">NK</span>
                                    <div className="content">
                                      <span className="user-name">
Nishant
                                          Kataria

                                      </span>
                                      {' '}
                                      <span className="designation">Director</span>

                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right-group">
                <h3>
Notes from
                  {' '}
                  <span className="company-name">Karvi</span>
                </h3>
                <p><strong><em>The information below is onli visible to your coworkers.</em></strong></p>
                <div className="company-information-right-bottom">
                  <h5>Qualification</h5>
                  <div className="company-information-item clearfix">
                    <div className="label">Qualification Status</div>
                    <div className="info">initial Invitaion Sent</div>
                  </div>
                  <div className="company-information-item clearfix">
                    <div className="label">Total Limit</div>
                    <div className="info">--</div>
                  </div>
                  <div className="company-information-item clearfix">
                    <div className="label">Single Project Limit</div>
                    <div className="info">--</div>
                  </div>
                  <div className="company-information-item clearfix">
                    <div className="label">Expiration Date</div>
                    <div className="info">--</div>
                  </div>
                  <div className="company-information-item clearfix">
                    <div className="label">Summary</div>
                    <div className="info">--</div>
                  </div>
                  <div className="company-information-item clearfix">
                    <div className="label">EMR Score</div>
                    <div className="info">--</div>
                  </div>
                  <div className="company-information-item clearfix">
                    <div className="label">Attachments</div>
                    <div className="info">--</div>
                  </div>
                  <div className="tags-group">
                    <div className="pull-right"><a href className="edit-tags transparent-btn">Edit Tags</a></div>
                    <h5>Tags</h5>
                    <form>
                      <select>
                        <option>Tags</option>
                      </select>
                    </form>
                    <p className="no-tags"><span>No Tags have been added yet.</span></p>
                    <ul>
                      <li>Tag 1</li>
                      <li>Tag 2</li>
                      <li>Tag 3</li>
                    </ul>
                  </div>
                  <div className="tags-group">
                    <div className="pull-right"><a href className="edit-review transparent-btn">Edit Review</a></div>
                    <h5>Reviews</h5>
                    <form>
                      <textarea defaultValue="No reviews have been added yet." />
                    </form>
                    <p className="no-review"><span>No Tags have been added yet.</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="user-profile-edit-group">
            <div className="popup-header">
              <div className="popup-header-content">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 pl-0">
                      <h1>
Edit Profile
                      </h1>

                    </div>
                    <div className="col-md-6 text-right">
                      <div className="edit-profile-button-group">
                        <button type="submit" className="cancel">Cancel</button>
                        <button type="submit" className="save">Save</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="popup-main-content">
              <div className="user-profile-edit-bottom-group">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="edit-profile-left-group">
                        <h3 className="red">You are editing a public profile.</h3>
                        <p>
We will ask
                          {' '}
                          <span className="company-name">Aexyn</span>
                          {' '}
to confirm any
                            edits you make hare. In
                            the meantime, your changes will be visible to other employees of your
                            company.

                        </p>
                        <form className="add-office-info">
                          <div className="form-field">
                            <div className="label label-text">
                              <label>Name</label>
                            </div>
                            <div className="input">
                              <input type="text" name="companyname" placeholder />
                            </div>
                          </div>
                          <div className="form-field">
                            <div className="label label-text">
                              <label>Website</label>
                            </div>
                            <div className="input">
                              <input type="text" name="website" placeholder />
                            </div>
                          </div>
                          <div className="form-field">
                            <div className="label label-text">
                              <label>Labour Type</label>
                            </div>
                            <div className="input">
                              <input type="text" name="workperformed" placeholder />
                            </div>
                          </div>
                          <div className="form-field">
                            <div className="label label-text">
                              <label>Business Type</label>
                            </div>
                            <div className="input">
                              <input type="text" name="workperformed" placeholder />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="edit-profile-right-group">
                        <h5>Flag Inaccurate information</h5>
                        <p>
Need to report inaccurate information? Tell us what you would like to
                            flag and we'll resolve
                            the Issues.

                        </p>
                        <div className="notification-inner">
                          <div>
                            <form>
                              <div>
                                <div className="form-field left-label clearfix">
                                  <div className="label-text"><input type="checkbox" name defaultValue="All" defaultChecked="checked" /></div>
                                  <div className="input-field">
                                    <label htmlFor="All">This Company is a duplicate</label>
                                    <input type="text" name placeholder="Anything else you'd like to add?" />
                                  </div>
                                </div>
                                <div className="form-field left-label clearfix">
                                  <div className="label-text"><input type="checkbox" name defaultValue="All" defaultChecked="checked" /></div>
                                  <div className="input-field">
                                    <label htmlFor="All">Other</label>
                                    <input type="text" name placeholder="Tell us more..." />
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal.Dialog>
    );
  }
}

export default UserPopup;

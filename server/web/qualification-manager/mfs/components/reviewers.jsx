import React from 'react';

const Reviewers = () => (
  <div className="col-sm-3 custom-review-sidebar">
    <div className="custom-sidebar-widget review-widget">
      <h3>Reviewers</h3>
      <div className="custom-sidebar-review">
        <ul className="custom-sidebar-reviw-listing clearfix">
          <li className="review-item">
            <div className="custom-review-member-details clearfix">
              <div className="member-left-icon">
                <span className="short">AA</span>
                <span className="checked"><i className="fa fa-check" aria-hidden="true" /></span>
              </div>
            </div>
          </li>
          <li className="review-item">
            <div className="custom-review-member-details clearfix">
              <div className="member-left-icon">
                <span className="short">AA</span>
                <span className="checked"><i className="fa fa-check" aria-hidden="true" /></span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <form className="custom-add-review-form">
        <div className="custom-review-form-inner">
          <input type="text" name placeholder="Add a reviewer" />
          <button type="Submit">+</button>
        </div>
      </form>
    </div>
    <div className="custom-sidebar-widget file-widget">
      <h3>
Files
        <small>
          <i className="fa fa-eye-slash" />
Private to your company
        </small>
      </h3>
      <form className="custom-files-form">
        <div className="custom-file-form-inner">
          <input type="file" />
        </div>
      </form>
    </div>
    <div className="custom-sidebar-widget notes-widget">
      <h3>
Notes
        <small>
          <i className="fa fa-eye-slash" />
Private to your company
        </small>
      </h3>
      <form className="custom-files-form">
        <div className="custom-file-form-inner">
          <div className="custom-note-form-field">
            <div className="custom-note-member-details clearfix">
              <div className="member-icon"><span className="short">AA</span></div>
              <div className="add-review-form-field">
                <textarea placeholder="Add a note..." defaultValue="" />
              </div>
            </div>
          </div>
          <div className="custom-note-form-field add-review-listing">
            <div className="note-add-review-item clearfix">
              <div className="add-review-member-icon"><span className="short">AA</span></div>
              <div className="custom-add-review-member-details">
                <div className="review-memmber-name"><a href="#">Plaster paris</a></div>
                <div className="review-byling">
                  <span className="review-date">10/29/10</span>
                  {' '}
at
                  {' '}
                  <span className="review-time">3:32 PM PDT</span>
                </div>
                <div className="review-summary">adsdsa fasdas fsdadd afsdfsd afafaf</div>
              </div>
              <div className="custom-detete-review-icon">
                <a href="#" className="delete-review"><i className="fa fa-trash-o" /></a>
              </div>
            </div>
            <div className="note-add-review-item clearfix">
              <div className="add-review-member-icon"><span className="short">AA</span></div>
              <div className="custom-add-review-member-details">
                <div className="review-memmber-name"><a href="#">Plaster paris</a></div>
                <div className="review-byling">
                  <span className="review-date">10/29/10</span>
                  {' '}
at
                  {' '}
                  <span className="review-time">3:32 PM PDT</span>
                </div>
                <div className="review-summary">adsdsa fasdas fsdadd afsdfsd afafaf</div>
              </div>
              <div className="custom-detete-review-icon">
                <a href="#" className="delete-review"><i className="fa fa-trash-o" /></a>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
);

export default Reviewers;

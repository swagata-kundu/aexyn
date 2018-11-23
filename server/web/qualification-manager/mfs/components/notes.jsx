import React, { Component } from 'react';


export default class Notes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const a = 1;
    return (
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
    );
  }
}

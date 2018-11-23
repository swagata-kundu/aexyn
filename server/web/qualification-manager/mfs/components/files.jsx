import React, { Component } from 'react';


export default class Files extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const b = 1;
    return (
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


    );
  }
}

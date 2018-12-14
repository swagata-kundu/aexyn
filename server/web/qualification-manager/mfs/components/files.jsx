import React, { Component } from 'react';
import { connect } from 'react-redux';
import { upload_file_service } from '../../../service/file';
import { load_invitation_files, add_invitation_files, delete_invitation_files } from '../../state/action';

class Files extends Component {
  componentDidMount() {
    const { invitationId } = this.props;
    this.props.load_invitation_files(invitationId);
  }


  uploadFile=async (e) => {
    const file = e.target.files[0];
    const { invitationId, userInfo } = this.props;
    try {
      const result = await upload_file_service([file]);
      const params = result.data[0];
      params.invitation_id = invitationId;
      params.user_id = userInfo.id;
      this.props.add_invitation_files(invitationId, params);
    } catch (error) {
      console.log(error);
    }
  }


  removeFile=(fileId) => {
    const { invitationId } = this.props;
    this.props.delete_invitation_files(fileId, invitationId);
  }

  renderFiles=() => {
    const { files } = this.props;
    return (
      <ul className="multi-files">
        {files.map(f => (
          <li key={f.id}>
            <a href={f.url}><span className="files-item">{f.file_name}</span></a>
            <span role="presentation" className="remove" onClick={() => this.removeFile(f.id)}>x</span>
          </li>
        ))}

      </ul>
    );
  }


  render() {
    return (
      <div className="custom-sidebar-widget file-widget">
        <h3>
      Files
          <small>
            <i className="fa fa-eye-slash" />
      Private to your company
          </small>
        </h3>
        <div className="custom-file-form-inner">
          <input type="file" onChange={this.uploadFile} />
          {this.renderFiles()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return ({
    files: state.invites.files,
    userInfo: state.common.get('userInfo').toJS(),
  });
}

export default
connect(mapStateToProps,
  {
    load_invitation_files, add_invitation_files, delete_invitation_files,
  })(Files);

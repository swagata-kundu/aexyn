import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { load_invitation_notes, add_invitation_notes, delete_invitation_notes } from '../../state/action';
import { formatDate, formatTime } from '../../../util';

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: '',
    };
  }

  componentDidMount() {
    const { invitationId } = this.props;
    this.props.load_invitation_notes(invitationId);
  }

  onNoteChange=(e) => {
    this.setState({ note: e.target.value });
  }

  addNote=(e) => {
    e.preventDefault();
    const { note } = this.state;
    const { invitationId, userInfo } = this.props;
    debugger;
    if (note) {
      const params = {
        invitation_id: invitationId,
        user_id: userInfo.id,
        note,
      };
      this.props.add_invitation_notes(invitationId, params);
      this.setState({ note: '' });
    }
  }

  removeNotes=(noteId) => {
    const { invitationId } = this.props;
    this.props.delete_invitation_notes(noteId, invitationId);
  }

  renderForm=() => {
    const { note } = this.state;
    const { userInfo } = this.props;
    const {
      pic, first_name, last_name,
    } = userInfo;
    const icon = `${_.get(first_name, '0', '').toLocaleUpperCase()}${_.get(
      last_name,
      '0',
      '',
    ).toLocaleUpperCase()}`;
    return (
      <form onSubmit={this.addNote}>
        <div className="custom-note-form-field">
          <div className="custom-note-member-details clearfix">
            <div className="member-icon"><span className="short">{icon}</span></div>
            <div className="add-review-form-field">
              <textarea placeholder="Add a note..." value={note} onChange={this.onNoteChange} />
              <button type="submit">+</button>
            </div>
          </div>
        </div>
      </form>
    );
  }

  renderNotes=() => {
    const { notes } = this.props;

    return notes.map((n) => {
      const {
        pic, first_name, last_name,
      } = n;
      const icon = `${_.get(first_name, '0', '').toLocaleUpperCase()}${_.get(
        last_name,
        '0',
        '',
      ).toLocaleUpperCase()}`;
      return (
        <div key={n.id} className="note-add-review-item clearfix">
          <div className="add-review-member-icon"><span className="short">{icon}</span></div>
          <div className="custom-add-review-member-details">
            <div className="review-memmber-name">
              <a href="#">
                {`${n.first_name} ${n.last_name}` }
              </a>

            </div>
            <div className="review-byling">
              <span className="review-date">{formatDate(n.date_created)}</span>
              {' '}
at
              {' '}
              <span className="review-time">{formatTime(n.date_created)}</span>
            </div>
            <div className="review-summary">{n.note}</div>
          </div>
          <div className="custom-detete-review-icon">
            <a href="#" className="delete-review">
              <i
                role="presentation"
                onClick={() => {
                  this.removeNotes(n.id);
                }}
                className="fa fa-trash-o"
              />
            </a>
          </div>
        </div>
      );
    });
  }

  render() {
    const { notes } = this.props;
    return (
      <div className="custom-sidebar-widget notes-widget">
        <h3>
Notes
          <small>
            <i className="fa fa-eye-slash" />
Private to your company
          </small>
        </h3>
        <div className="custom-files-form">
          <div className="custom-file-form-inner">
            {this.renderForm()}
            <div className="custom-note-form-field add-review-listing">

              {this.renderNotes()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return ({
    notes: state.invites.notes,
    userInfo: state.common.get('userInfo').toJS(),
  });
}

export default
connect(mapStateToProps,
  {
    load_invitation_notes,
    add_invitation_notes,
    delete_invitation_notes,
  })(Notes);

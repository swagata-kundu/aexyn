import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import Tags from '../../../components/tag';
import FI from '../../../components/file-input';

const StatusForm = (props) => {
  const {
    handleSubmit, onSubmit, disabled,
  } = props;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row custom-qualification-form-field">
        <div className="col-sm-2">
          <label>Status</label>
        </div>
        <div className="col-sm-5 input-field">
          <Field
            className="custom-input"
            component="select"
            name="status"
            disabled={disabled}
            required
          >
            <option value="">Select a Status</option>
            <option value="APPROVED">Approve</option>
            <option value="APPROVED_EXCEPTION">Approve Exception</option>
            <option value="DENIED">Deny</option>
          </Field>
        </div>
        <div className="col-sm-5">
          <div className="field-help-text">
                      Choose a status to finalize this application
          </div>
        </div>
      </div>
      <div className="row custom-qualification-form-field">
        <div className="col-sm-2">
          <label>Total Limit</label>
        </div>
        <div className="col-sm-5 input-field">
          <Field
            component="input"
            type="number"
            name="total_limit"
            placeholder="Total Limit"
            disabled={disabled}
          />
          {' '}
          <span className="form-field-icon dollar-icon">$</span>
        </div>
        <div className="col-sm-5">
          <div className="field-help-text">
                      All remaining fiels are optional
          </div>
        </div>
      </div>
      <div className="row custom-qualification-form-field">
        <div className="col-sm-2">
          <label>Single Project Limit</label>
        </div>
        <div className="col-sm-5 input-field">
          <Field
            component="input"
            type="number"
            name="project_limit"
            placeholder="Single Project Limit"
            disabled={disabled}
          />
          <span className="form-field-icon dollar-icon">$</span>
        </div>
        <div className="col-sm-5" />
      </div>
      <div className="row custom-qualification-form-field">
        <div className="col-sm-2">
          <label>Expiration Date</label>
        </div>
        <div className="col-sm-5 input-field">
          <Field
            component="input"
            type="date"
            name="expiry_date"
            placeholder="Expiration Date"
            disabled={disabled}
          />
          <span className="form-field-icon date-icon">
            <i className="fa fa-calendar-o" aria-hidden="true" />
          </span>
        </div>
        <div className="col-sm-5" />
      </div>
      <div className="row custom-qualification-form-field">
        <div className="col-sm-2">
          <label>Summary</label>
        </div>
        <div className="col-sm-10 input-field">
          <Field
            component="textarea"
            type="text"
            name="summary"
            placeholder="Summary"
            disabled={disabled}
          />
        </div>
      </div>
      <div className="row custom-qualification-form-field">
        <div className="col-sm-2">
          <label>Company Tags</label>
        </div>
        <div className="col-sm-10 input-field">
          <Field
            component={Tags}
            name="tags"
            disabled={disabled}
          />
        </div>
      </div>
      <div className="row custom-qualification-form-field">
        <div className="col-sm-2">
          <label>Attachments</label>
        </div>
        <div className="col-sm-10 input-field">
          <Field
            component={FI}
            name="files"
            className="custom-input"
            disabled={disabled}

          />
        </div>
      </div>
    </form>
  );
};
const StatusFormConnected = reduxForm({
  form: 'qualification-status',
  enableReinitialize: true,
})(StatusForm);

function mapStateToProps(state) {
  const { invites } = state;
  const { invitation } = invites;
  const { detail = {} } = invitation;
  const initialValues = {
    status: detail.status,
    total_limit: detail.total_limit,
    project_limit: detail.project_limit,
    expiry_date: detail.expiry_date,
    summary: detail.summary,
    tags: detail.tags ? detail.tags : [],
    files: detail.files ? detail.files : [],
  };
  return ({
    initialValues,
  });
}


export default connect(
  mapStateToProps,
)(StatusFormConnected);

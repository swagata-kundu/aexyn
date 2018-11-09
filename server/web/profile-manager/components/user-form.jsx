import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import MultiSelect from '../../components/multi-select';


const UserProfileForm = (props) => {
  const {
    handleSubmit, onSubmit, workPerformed, disabled,
  } = props;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-field">
        <div className="label label-text">
          <label>First Name</label>
        </div>
        <div className="input">
          <Field
            component="input"
            type="text"
            name="user_info.first_name"
            placeholder="First Name"
            maxLength={20}
            required
            disabled={disabled}
          />
        </div>
      </div>
      <div className="form-field">
        <div className="label label-text">
          <label>Last Name</label>
        </div>
        <div className="input">
          <Field
            component="input"
            type="text"
            name="user_info.last_name"
            placeholder="Last Name"
            maxLength={20}
            required
            disabled={disabled}
          />
        </div>
      </div>
      <div className="form-field">
        <div className="label label-text">
          <label>Job Title</label>
        </div>
        <div className="input">
          <Field
            component="input"
            type="text"
            name="office_profile.job_title"
            placeholder="Job Title"
            maxLength={20}
            required
            disabled={disabled}
          />
        </div>
      </div>
      <div className="form-field">
        <div className="label label-text">
          <label>Work Phone</label>
        </div>
        <div className="input">
          <Field
            component="input"
            type="text"
            name="office_profile.work_phone"
            placeholder="Work Phone"
            maxLength={20}
            required
            disabled={disabled}
          />
        </div>
      </div>
      <div className="form-field">
        <div className="label label-text">
          <label>Personal Phone</label>
        </div>
        <div className="input">
          <Field
            component="input"
            type="text"
            name="office_profile.personal_phone"
            placeholder="Personal Phone"
            maxLength={20}
            required
            disabled={disabled}
          />
        </div>
      </div>
      <div className="form-field">
        <div className="label label-text">
          <label>Work Performed</label>
        </div>
        <div className="input">
          <Field
            component={MultiSelect}
            options={workPerformed}
            type="text"
            name="office_profile.work_performed"
            placeholder="Work Performed"
            disabled={disabled}
          />
        </div>
      </div>
    </form>
  );
};
const UserProfileFormConnected = reduxForm({
  form: 'update-userprofile',
  enableReinitialize: true,
})(UserProfileForm);

function mapStateToProps(state) {
  const { profile } = state;
  const { user_info, office_profile } = profile;
  const initialValues = {
    user_info: {
      first_name: user_info.first_name,
      last_name: user_info.last_name,
    },
    office_profile: {
      job_title: office_profile.job_title,
      personal_phone: office_profile.personal_phone,
      work_phone: office_profile.work_phone,
      work_performed:
      office_profile.work_performed ? JSON.parse(office_profile.work_performed) : [],
    },
  };
  return ({
    initialValues,
    workPerformed: state.common.getIn(['masterData', 'workPerformed']).toJS(),

  });
}


export default connect(mapStateToProps)(UserProfileFormConnected);

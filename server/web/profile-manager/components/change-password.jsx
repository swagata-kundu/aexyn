import React, { Component } from 'react';
import {
  Field, reduxForm, SubmissionError, reset,
} from 'redux-form';
import { connect } from 'react-redux';
import { customField } from '../../components/field';
import { change_user_password_service } from '../../service/profile';

const ChangePasswordForm = (props) => {
  const {
    handleSubmit, onSubmit, error,
  } = props;
  return (
    <div>
      {error && <strong>{error}</strong>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-field">
          <div className="label label-text">
            <label>Old Password</label>
          </div>
          <Field
            component={customField}
            type="password"
            name="password"
            label="Password"
            maxLength={50}
            required
          />
        </div>
        <div className="form-field">
          <div className="label label-text">
            <label>New Password</label>
          </div>
          <Field
            component={customField}
            type="password"
            name="newPassword"
            label="New password"
            maxLength={50}
            required
          />
        </div>
        <div className="form-field">
          <div className="label label-text">
            <label>Confirm Password</label>
          </div>
          <Field
            component={customField}
            type="password"
            name="repeatPassword"
            label="Repeat password"
            maxLength={50}
            required
          />
          <div className="buttom-group text-right">
            <button type="submit">Change Password</button>
          </div>
        </div>
      </form>
    </div>
  );
};

const ChangePasswordFormConnected = reduxForm({
  form: 'change-password',
})(ChangePasswordForm);


class ChangePassword extends Component {
 changePassword= async (values) => {
   const { password, newPassword, repeatPassword } = values;
   if (password && newPassword && repeatPassword) {
     if (password === newPassword) {
       throw new SubmissionError({
         password: 'Old password must be different',
       });
     }
     if (repeatPassword !== newPassword) {
       throw new SubmissionError({
         repeatPassword: 'Password donot match',
       });
     }
     try {
       await change_user_password_service({ password, newPassword });
       this.props.reset('change-password');
     } catch (error) {
       throw new SubmissionError({
         _error: error.response.data.message,
       });
     }
   }
 }

 render() {
   return (
     <div>
       <div className="top-bar">
         <div className="row">
           <div className="left-group col-md-8">
             <p>PASSWORD</p>
           </div>
         </div>
       </div>
       <div className="bottom-group">
         <ChangePasswordFormConnected onSubmit={this.changePassword} />
       </div>
     </div>
   );
 }
}

export default connect(null, ({ reset }))(ChangePassword);

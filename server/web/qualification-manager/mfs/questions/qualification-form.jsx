import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, FieldArray, Field } from 'redux-form';
import Fields from './components/fields';

const QualificationForm = (props) => {
  const { handleSubmit, onSubmit } = props;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="content-group">
        <div className="content-item">
          <h3>Opening Statement</h3>
          <p>
            Please complete all the questions. The contents of this
            questionnaire will be considered confidention and used safety to
            determine your firm's qualification and will not be disclosed to
            others.
          </p>
        </div>
      </div>
      <div className="form-group">
        <h3>Company profile</h3>
        <FieldArray name="CP" component={Fields} />
      </div>
      <div className="form-group">
        <h3>Certification And Licenses</h3>
        <FieldArray name="CL" component={Fields} />
      </div>
      <div className="form-group">
        <h3>Health And Safety</h3>
        <FieldArray name="HS" component={Fields} />
      </div>
      <div className="form-group">
        <h3>Insurance And Surity</h3>
        <FieldArray name="IS" component={Fields} />
      </div>
      <div className="form-group">
        <h3>Financials</h3>
        <FieldArray name="FIN" component={Fields} />
      </div>
      <div className="form-group">
        <h3>Work Experience</h3>
        <FieldArray name="WEX" component={Fields} />
      </div>
      <div className="form-group">
        <h3>Legal</h3>
        <FieldArray name="LGL" component={Fields} />
      </div>
      <div className="form-group">
        <h3>Others</h3>
        <FieldArray name="OTH" component={Fields} />
      </div>
      <div className="form-group">
        <h3>Signature</h3>
        <FieldArray name="SIG" component={Fields} />
      </div>
    </form>
  );
};

const QualificationFormConnected = reduxForm({
  form: 'qualificationForm',
  enableReinitialize: true,
})(QualificationForm);

export default connect(state => ({
  initialValues: state.qualification.questions,
}))(QualificationFormConnected);

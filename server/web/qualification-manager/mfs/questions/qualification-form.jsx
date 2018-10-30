import React from 'react';
import { reduxForm, FieldArray, Field } from 'redux-form';

const QualificationForm = props => {
  const { handleSubmit, onSubmit, questionTypes } = props;
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
    </form>
  );
};

const QualificationFormConnected = reduxForm({
  form: 'qualificationForm',
})(QualificationForm);

export default QualificationFormConnected;

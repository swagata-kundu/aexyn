import React from 'react';
import { reduxForm, FieldArray, Field } from 'redux-form';
import { connect } from 'react-redux';
import Editor from '../../../components/editor';
import QS from './components/question-selection';

const ConfigureQuestion = (props) => {
  const {
    handleSubmit, onSubmit, questionTypes, onCancel,
  } = props;
  return (
    <form disabled onSubmit={handleSubmit(onSubmit)}>
      <div className="custom-edit-ques-group">
        <div className="top-group clearfix">
          <h1>Qualification Questionnaire</h1>
          <span className="button-group">
            <button type="button" onClick={onCancel} className="custom-ques-cancel-btn">
              Cancel
            </button>
            <button type="submit" className="custom-btn custom-ques-btn">
              Save
            </button>
          </span>
        </div>
        <div className="content-group">
          <p>
            Customize the questionnaire that your supplier will be asked to
            complete:
          </p>
          <div className="content-item">
            <h3>Opening Statement</h3>
            <Field component={Editor} required name="opening_statement" />
          </div>
          <div className="content-item">
            <div className="form-edit-group">
              <h3>Company Profile</h3>
              <FieldArray questionTypes={questionTypes} name="CP" component={QS} />
            </div>
          </div>
          <div className="content-item">
            <div className="form-edit-group">
              <h3>Certification And Licenses</h3>
              <FieldArray questionTypes={questionTypes} name="CL" component={QS} />
            </div>
          </div>
          <div className="content-item">
            <div className="form-edit-group">
              <h3>Health And Safety</h3>
              <FieldArray questionTypes={questionTypes} name="HS" component={QS} />
            </div>
          </div>
          <div className="content-item">
            <div className="form-edit-group">
              <h3>Insurance And Surity</h3>
              <FieldArray questionTypes={questionTypes} name="IS" component={QS} />
            </div>
          </div>
          <div className="content-item">
            <div className="form-edit-group">
              <h3>Financials</h3>
              <FieldArray questionTypes={questionTypes} name="FIN" component={QS} />
            </div>
          </div>
          <div className="content-item">
            <div className="form-edit-group">
              <h3>Work Experience</h3>
              <FieldArray questionTypes={questionTypes} name="WEX" component={QS} />
            </div>
          </div>
          <div className="content-item">
            <div className="form-edit-group">
              <h3>Legal</h3>
              <FieldArray questionTypes={questionTypes} name="LGL" component={QS} />
            </div>
          </div>
          <div className="content-item">
            <div className="form-edit-group">
              <h3>Others</h3>
              <FieldArray questionTypes={questionTypes} name="OTH" component={QS} />
            </div>
          </div>
          <div className="content-item">
            <div className="form-edit-group">
              <h3>Signature</h3>
              <FieldArray questionTypes={questionTypes} name="SIG" component={QS} />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

const ConfigureQuestionConnected = reduxForm({
  form: 'configureQuestion',
  enableReinitialize: true,
})(ConfigureQuestion);

export default connect(state => ({
  initialValues: state.qualification.questions,
  questionTypes: state.qualification.questionTypes,
}))(ConfigureQuestionConnected);

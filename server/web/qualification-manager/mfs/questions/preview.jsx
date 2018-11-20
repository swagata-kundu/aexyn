import React, { Component } from 'react';
import { submit } from 'redux-form';
import { connect } from 'react-redux';
import _ from 'lodash';
import { load_questions } from '../../state/action';
import SideMenu from './components/sidemenu';
import { getQuestions } from '../../../service/qualification-manager';
import QF from './qualification-form';

class Preview extends Component {
  constructor(props) {
    super(props);
    this.questionSet = null;
  }

  componentDidMount = async () => {
    const r = await getQuestions({ include: true });
    const questions = _.get(r, 'questions', {});
    const questionTypes = _.get(r, 'questionTypes', []);
    const questionSet = _.get(r, 'questionSet', {});
    this.questionSet = questionSet.id;
    this.props.load_questions({
      questions: {
        ...questions,
        opening_statement: questionSet.opening_statement,
      },
      questionTypes,
    });
  };

  submit=() => {
    this.props.submit('qualificationForm');
  }

  render() {
    return (
      <section
        className="custom-body-container-wrapper"
        style={{ paddingLeft: 50 }}
      >
        <div className="custom-body-container custom-questionnaire-section">
          <SideMenu />

          <div className="custom-right-group custom-preview-ques-group">
            <div className="top-group clearfix">
              <h1>Qualification Questionnaire</h1>
              <span className="button-group">
                <a href="/qualification-manager/manage-food-suppliers/configure-questions" className="custom-btn custom-ques-btn">
                  Configure Questionnaire
                </a>
              </span>
              <button type="button" onClick={this.submit}>Submit</button>
            </div>
            <div className="bottom-group">
              <p>This is a preview of questionnaire that your supplier will be asked to complete:</p>
              <QF onSubmit={(values) => {
                console.log(values);
              }}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default connect(
  null,
  { load_questions, submit },
)(Preview);

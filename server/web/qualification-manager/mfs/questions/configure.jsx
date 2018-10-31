import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { load_questions } from '../../state/action';
import SideMenu from './components/sidemenu';
import Form from './configuration-form';
import { getQuestions, saveQuestions } from '../../../service/qualification-manager';

class Configure extends Component {
  constructor(props) {
    super(props);
    this.questionSet = null;
  }

  saveQuestions= async (values) => {
    try {
      await saveQuestions({ ...values, questionSet: this.questionSet });
    } catch (error) {

    }
  }

  componentDidMount=async () => {
    const r = await getQuestions();
    const questions = _.get(r, 'questions', {});
    const questionTypes = _.get(r, 'questionTypes', []);
    const questionSet = _.get(r, 'questionSet', {});
    this.questionSet = questionSet.id;
    this.props.load_questions({ questions: { ...questions, opening_statement: questionSet.opening_statement }, questionTypes });
  }

  render() {
    return (
      <section
        className="custom-body-container-wrapper"
        style={{ paddingLeft: 50 }}
      >
        <div className="custom-body-container custom-questionnaire-section">
          <SideMenu />

          <div className="custom-right-group">
            <Form onSubmit={this.saveQuestions} />
          </div>
        </div>
      </section>
    );
  }
}

export default connect(null, ({ load_questions }))(Configure);

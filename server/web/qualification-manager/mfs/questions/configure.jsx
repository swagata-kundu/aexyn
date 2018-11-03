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
    const { history } = this.props;
    try {
      await saveQuestions({ ...values, questionSet: this.questionSet });
      history.push('/manage-food-suppliers/preview-questions');
    } catch (error) {
      alert('Something went wrong');
    }
  }

  cancel=() => {
    const { history } = this.props;
    if (history.length) {
      history.replace('/manage-food-suppliers/preview-questions');
    } else {
      history.push('/manage-food-suppliers/preview-questions');
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
            <Form onSubmit={this.saveQuestions} onCancel={this.cancel} />
          </div>
        </div>
      </section>
    );
  }
}

export default connect(null, ({ load_questions }))(Configure);

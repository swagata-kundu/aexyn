import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { load_questions } from '../../state/action';
import SideMenu from './sidemenu';
import Form from './configuration-form';
import { getQuestions } from '../../../service/qualification-manager';

class Configure extends Component {
  componentDidMount=async () => {
    const r = await getQuestions();
    const questions = _.get(r, 'questions', {});
    const questionTypes = _.get(r, 'questionTypes', []);
    const { questionSet } = r;
    this.props.load_questions({ questions, questionTypes });
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
            <Form handleSubmit={() => {}} />
          </div>
        </div>
      </section>
    );
  }
}

export default connect(null, ({ load_questions }))(Configure);

import React, { Component } from 'react';
import _ from 'lodash';
import SideMenu from './sidemenu';
import Form from './configuration-form';
import { getQuestions } from '../../../service/qualification-manager';

export default class Configure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: {},
      questionTypes: [],
    };
  }

  componentDidMount=async () => {
    const r = await getQuestions();
    const questions = _.get(r, 'questions', {});
    const questionTypes = _.get(r, 'questionTypes', []);
    const { questionSet } = r;
    this.setState({
      questions, questionTypes, questionSet,
    });
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
            <Form handleSubmit={()=>{}}/>
          </div>
        </div>
      </section>
    );
  }
}

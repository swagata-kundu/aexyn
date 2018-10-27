import React, { Component } from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';

const ConfigureQuestion = (props) => {
    const { handleSubmit, onSubmit } = props;
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
      
      </form>
    );
  };

  const ConfigureQuestionConnected = reduxForm({
    form: 'configureQuestion',
  })(ConfigureQuestion);
import React from 'react';
import { Field } from 'redux-form';

const renderQuestions = ({ fields, questionTypes }) => {
  const qTypes = questionTypes.filter(qt => qt.configurable);
  const questions = fields.map((q, index) => {
    const current_question = fields.get(index);
    const { isDefault, text, type_name, isDisabled } = current_question;
    return (
      <tr key={`${q}-${index}`}>
        <td>
          {isDefault ? (
            text
          ) : (
            <Field
              name={`${q}.text`}
              component="input"
              type="text"
              placeholder="Custom Question"
            />
          )}
        </td>
        <td>
          {type_name || (
            <Field name={`${q}.type`} component="select">
              <option value="">Select</option>
              {qTypes.map(qt => (
                <option key={qt.id} value={qt.id}>
                  {qt.name}
                </option>
              ))}
            </Field>
          )}
        </td>
        <td>
          <Field
            component="input"
            name={`${q}.isIncluded`}
            type="checkbox"
            disabled={isDisabled}
            className="include-check"
          />
        </td>
        <td>
          <Field
            component="input"
            name={`${q}.isRequired`}
            type="checkbox"
            disabled={isDisabled}
            className="requare-check"
          />
          {isDefault ? null : (
            <span
              role="presentation"
              className="add-row-value"
              onClick={() => {
                fields.remove(index);
              }}
            >
              <i className="fa fa-times" aria-hidden="true" />
            </span>
          )}
        </td>
      </tr>
    );
  });

  const addQuestion = () => {
    const lastQuestion = fields.get(fields.length - 1);
    const { text, type } = lastQuestion;
    if (text && type) {
      fields.push({});
    }
  };

  return (
    <table>
      <tbody>
        <tr>
          <th className="text-left">Question</th>
          <th className="text-left">Response Type</th>
          <th>Include?</th>
          <th>Required?</th>
        </tr>
      </tbody>
      <tbody>
        {questions}
        <button type="button" onClick={addQuestion}>
          ADD
        </button>
        <tr className="add-feld-btn-wrp">
          <td>
            <span className="ad-field">
              <i className="fa fa-plus-circle" aria-hidden="true" />
              add a field
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default renderQuestions;

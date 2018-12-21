import React from 'react';
import { Field } from 'redux-form';
import { connect } from 'react-redux';
import MS from '../../../../../components/multi-select';

const MultiSelect = ({
  name, questionInfo, common, disabled,
}) => {
  const labourType = common.labourType ? common.labourType.map(l => l.name) : [];
  const businessType = common.businessType ? common.businessType : [];
  const workPerformed = common.workPerformed ? common.workPerformed.map(l => l.name) : [];
  let options = [];
  if (questionInfo.text === 'Business Type') {
    options = businessType;
  }
  if (questionInfo.text === 'Labour Type') {
    options = labourType;
  }
  if (questionInfo.text === 'Work Performed') {
    options = workPerformed;
  }

  return (
    <div className="form-field left-label">
      <div className="label-text">
        <label>{questionInfo.text}</label>
      </div>
      <div className="input-field">
        <Field disabled={disabled} name={`${name}.value`} options={options} component={MS} placeholder={questionInfo.text} />
      </div>
    </div>
  );
};
function mapStateToProps(state) {
  return ({
    common: state.common.get('masterData').toJS(),
  });
}

export default connect(mapStateToProps)(MultiSelect);

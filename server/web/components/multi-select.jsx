import React from 'react';
import Select from 'react-select';
import _ from 'lodash';
import { selectedFilter } from '../service/qualification-manager';

let updatevalue = false;

const multiSelect = (field) => {
  const { options = [], input } = field;
  const moded_options = options.map(o => ({
    value: o.id,
    label: o.name,
  }));

  const change = (e) => {
    let newValues = e || [];
    newValues = newValues.map(v => parseInt(v.value, 10));
    input.onChange(newValues);
    if (field.input.name === 'workPerformance'
    || field.input.name === 'tags') {
      updatevalue = true;
    }
  };

  const current = input.value || [];
  const currentValues = _.map(current, c => _.find(moded_options, o => o.value === c));

  if (updatevalue && (field.input.name === 'workPerformance'
  || field.input.name === 'tags')) {
    selectedFilter(currentValues, field.input.name);
    updatevalue = false;
  }

  return (
    <div>
      <Select
        value={currentValues}
        onChange={change}
        placeholder={field.placeholder}
        isMulti
        options={moded_options}
        closeMenuOnSelect={false}
        isDisabled={field.disabled}
      />
    </div>
  );
};

export default multiSelect;

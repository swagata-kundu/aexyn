import React from 'react';
import Select from 'react-select';
import _ from 'lodash';

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
  };

  const current = input.value || [];
  const currentValues = _.map(current, c => _.find(moded_options, o => o.value === c));

  return (
    <div>
      <Select
        value={currentValues}
        onChange={change}
        placeholder={field.placeholder}
        isMulti
        options={moded_options}
        closeMenuOnSelect={false}
      />
    </div>
  );
};

export default multiSelect;

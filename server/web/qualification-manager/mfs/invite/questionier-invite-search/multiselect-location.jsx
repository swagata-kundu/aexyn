import React from 'react';
import Select from 'react-select';
import { selectedFilter } from '../../../../service/qualification-manager';

let newValues;
let updatevalue = false;

const multiSelectLocation = (field) => {
  const { options, input } = field;

  const moded_options = options.map(o => ({
    value: o,
    label: o,
  }));
  const change = (e) => {
    newValues = e || [];
    newValues = newValues.map(v => v.value);
    input.onChange(newValues);
    updatevalue = true;
  };

  const current = input.value || [];


  const finalArray = [];
  moded_options.forEach(x => current.forEach((y) => {
    if (x.value === y) {
      finalArray.push(x);
    }
  }));
  if (updatevalue) {
    selectedFilter(finalArray, field.input.name);
    updatevalue = false;
  }

  return (
    <div>
      <Select
        value={finalArray}
        onChange={change}
        placeholder={field.placeholder}
        isMulti
        options={moded_options}
        closeMenuOnSelect={false}
      />
    </div>
  );
};

export default multiSelectLocation;

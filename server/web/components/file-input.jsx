import React from 'react';
import _ from 'lodash';
import { upload_file_service } from '../service/file';

const FileInput = (field) => {
  const { input, disabled } = field;
  const { value = [], onChange, name } = input;

  const uploadFile = async (e) => {
    const file = Array.from(e.target.files);
    try {
      const result = await upload_file_service(file);
      const files = result.data;
      const newFiles = _.compact(_.concat(value, files));
      onChange(newFiles);
    } catch (error) {
      console.log(error);
    }
  };

  const renderExistingFiles = () => _.map(value, (v, index) => (
    <span key={`${name}-${index}`}>
      <a target="_blank" href={v.url}>{v.file_name}</a>
    </span>
  ));

  return (
    <div>
      <input type="file" onChange={uploadFile} multiple disabled={disabled} />
      {renderExistingFiles()}
    </div>
  );
};

export default FileInput;

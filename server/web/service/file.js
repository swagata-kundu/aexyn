import { axios } from '../util';
import { FILES } from '../endpoint';

export const upload_file_service = (files) => {
  const fd = new FormData();
  files.forEach((f) => {
    fd.append('file', f);
  });
  return axios.post(FILES, fd, {
    headers: { 'content-type': undefined },
  });
};

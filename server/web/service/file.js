import { axios } from '../util';
import { FILES } from '../endpoint';

export const upload_file_service = (data) => {
  const fd = new FormData();
  fd.append('file', data);
  return axios.post(FILES, fd, {
    headers: { 'content-type': undefined },
  });
};

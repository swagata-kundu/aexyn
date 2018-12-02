import Express from 'express';
import Uploader from '../../common/uploadhandler';

const uploadHandler = new Uploader(1000);

export default function (db) {
  return Express
    .Router()
    .post('/', uploadHandler.uploadFile, require('./uploadfile')(db));
}

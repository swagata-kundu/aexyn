import Express from 'express';
import Uploader from '../../common/uploadhandler';
import AWSHelper from '../../common/aws';

const uploadHandler = new Uploader(1000);

export default function (db) {
  return Express
    .Router()
    .post('/', uploadHandler.uploadFile, AWSHelper.uploadMiddleWare, require('./uploadfile')(db));
}

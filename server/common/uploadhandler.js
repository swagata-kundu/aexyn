import multer from 'multer';
import Boom from 'boom';
import path from 'path';


export default class UploadHandler {
  constructor(fileSize) {
    this.fileSize = fileSize;

    this.storage = multer.diskStorage({
      destination(req, file, cb) {
        const root = path.normalize(`${__dirname}/../..`);
        cb(null, `${root}/uploads/`);
      },
      filename(req, file, cb) {
        cb(null, `${Date.now()}_${file.originalname}`);
      },
    });
    this.uploadFile = this.uploadFile.bind(this);
  }

  handleUploadError(req, res, next, upload) {
    upload(req, res, (err) => {
      if (err) {
        if (err.code === 'LIMIT_FILE_SIZE') {
          return next(Boom.boomify(err, 'File size limit exceeds'));
        }
        return next(Boom.internal(err, 'Error in file upload'));
      }
      return next();
    });
  }

  uploadFile(req, res, next) {
    const upload = multer({
      storage: this.storage,
      limits: {
        fileSize: this.fileSize * 1024 * 1024,
      },
    }).any();
    this.handleUploadError(req, res, next, upload);
  }
}

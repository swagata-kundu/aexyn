import AWS from 'aws-sdk';
import { unlink, createReadStream } from 'fs';
import _ from 'lodash';

const AWSHelper = {};
module.exports = AWSHelper;

const awsConfig = {
  accessKeyId: process.env.AWSAccessKeyId,
  secretAccessKey: process.env.AWSSecretKey,
  region: process.env.AWSRegion,
};

// update aws setting
AWS.config.update(awsConfig);

/**
 * Delete file after uploading to AWS
 * @param {string} pathToFile - path of file to delete.
 */
const deleteFile = (pathToFile) => {
  unlink(pathToFile, (err) => {
    if (err) {
      console.error(err.message);
    }
  });
};


/**
 * Upload a single file in aws
 * @param {file} file -file to upload,
 * @param {bucketDetail} AWS location information.
 */
AWSHelper.uploadSingle = (file, bucketDetail) => new Promise(((resolve, reject) => {
  const fileToUpload = createReadStream(file.path);
  fileToUpload.on('error', (err) => {
    reject(err);
  });
  const key = `${bucketDetail.folderName}/${file.filename}`;
  const s3 = new AWS.S3();
  s3.upload({
    Bucket: bucketDetail.bucketName,
    Key: key,
    Body: fileToUpload,
    ACL: 'public-read',
  }).send((err, data) => {
    deleteFile(file.path);
    if (err) {
      reject(err);
    } else {
      resolve(data.Location);
    }
  });
}));


/**
 * Upload multiple files in aws
 * @param {array} files -files to upload,
 * @param {bucketDetail} AWS location information.
 * @param {function(Error,object)} callback - callback function.
 */

AWSHelper.uploadMultiple = (files, bucketDetail, callback) => {
  const promiseArray = [];
  for (const index in files) {
    promiseArray.push(AWSHelper.uploadSingle(files[index], bucketDetail));
  }
  Promise.all(promiseArray).then(urls => callback(null, urls), error => callback(error));
};


/**
 * Create bucket at the aws S3
 * @param {stting} bucketName -name of the bucket,
 * @param {function(Error,object)} callback - callback function.
 */

AWSHelper.createAWSBucket = (bucketName, callback) => {
  const s3 = new AWS.S3();
  const valid_name = _.replace(' ', _.escape(_.toLower(bucketName)), '-');
  s3.createBucket({ Bucket: valid_name, ACL: 'public-read-write' }, callback);
};

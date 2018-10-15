import Joi from 'joi';
import Async from 'async';
import Boom from 'boom';
import _ from 'lodash';


export default class UserController {
  

  signup(request, response, next) {
    const signUpSchema = {
      fN: Joi.string().required().trim(),
      lN: Joi.string().optional().trim(),
      pwd: Joi.string().required().trim(),
      email: Joi.string().email().required().trim(),
      pNo: Joi.string().length(10).regex(new RegExp('^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$')).description('test'),
      socialId: Joi.string().optional(),
      loginType: Joi.string().optional().allow(''),
      token: Joi.string().optional(),
      DOB: Joi.string().optional(),
      gender: Joi.string().optional(),
      otp: Joi.string().optional(),

    };

    let validatedBody = {};

    Async.waterfall([
      (cb) => {
        Joi.validate(request.body, signUpSchema, {
          convert: true,
        }, cb);
      },
      (validationResult, cb) => {
        validatedBody = validationResult;
        userService.checkDuplicateUser(request.body.email, (err, exists) => {
          if (err) {
            return cb(err);
          }
          if (exists) {
            return cb(Boom.illegal('User already registered'));
          }
          return cb(null);
        });
      },
      (cb) => {
        let img = '';
        if (request.files && request.files.length) {
          img = `/uploads/${request.files[0].filename}`;
        }
        const insertObject = Object.assign({}, validatedBody, {
          pwd: encryptPass(validatedBody.pwd),
          isDeleted: false,
          img,
        });

        userService.insertUser(insertObject, cb);
      },
    ], (err, result) => {
      if (err) {
        return next(err);
      }
      emailVerify(result);
      return response.json(new Response(result, 'Verification link sent to your accunt'));
    });
  }

  login(request, response, next) {
    const isEmail = _.has(request.body, 'email');
    const isPhoneNo = _.has(request.body, 'pNo');
    if (!isEmail && !isPhoneNo) {
      return next(Boom.badRequest('email or pNo is required'));
    }

    const validationSchema = {
      pwd: Joi.string().required().trim(),
    };
    if (isEmail) {
      validationSchema.email = Joi.string().required().email().trim();
    } else {
      validationSchema.pNo = Joi.string().required().length(10).trim();
    }

    Async.waterfall([
      cb => Joi.validate(request.body, validationSchema, cb),
      (validationResult, cb) => {
        const queryObject = {
          pwd: encryptPass(validationResult.pwd),
          isDeleted: false,
        };
        if (isEmail) {
          queryObject.email = validationResult.email;
        } else {
          queryObject.pNo = validationResult.pNo;
        }
        userService.logIn(queryObject, cb);
      },
      (userObject, cb) => {
        const {
          email,
          _id,
          isVerified,
        } = userObject;

        if (!isVerified) {
          return cb(Boom.unauthorized('User is not verified'));
        }

        generateJwt({
          email,
          id: _id,
        }, (err, token) => {
          if (err) {
            return cb(err);
          }

          const loginResponse = createLoginResponse(userObject, {});
          loginResponse.token = token;
          return cb(null, loginResponse);
        });
      },
    ], (err, result) => {
      if (err) {
        // if (err.isBoom && err.output.statusCode === 401) {
        //     return response.json(new Response({
        //         statusCode: 401,
        //     }, err.output.payload.message));
        // }
        return next(err);
      }
      return response.json(new Response(result, 'User successfully Logged in'));
    });
  }
}

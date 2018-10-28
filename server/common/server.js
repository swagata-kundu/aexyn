import Express from 'express';
import * as bodyParser from 'body-parser';
import * as http from 'http';
import * as path from 'path';
import cors from 'cors';
import Config from 'config';
import Morgan from 'morgan';
import Helmet from 'helmet';
import Session from 'express-session';
import env from 'dotenv';
import ConnectRedis from 'connect-redis';
import CookieParser from 'cookie-parser';

import ErrorHandler from './errorhandler';
import Db from './db';
import Api from '../api';
import Web from '../web';

const webpackDevMiddleware = require('webpack-dev-middleware');
const WHM = require('webpack-hot-middleware');
const webpack = require('webpack');
const WebpackConfig = require('../../webpack.config');

const compiler = webpack(WebpackConfig);

const root = path.normalize(`${__dirname}/../..`);
const RedisStore = ConnectRedis(Session);


export default class ExpressServer {
  constructor() {
    this.app = new Express();
    this.db = new Db();
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({
      extended: true,
    }));
    env.config();
    this.app.use(Morgan('dev'));
    this.app.use(Helmet());
    this.app.use(CookieParser());
    this.app.use(Session({
      secret: process.env.SESSION_SECRET,
      cookie: {},
      store: new RedisStore(Config.get('redis')),
    }));
    if (process.env.NODE_ENV === 'development' && !process.env.API_DEV) {
      this.app.use(webpackDevMiddleware(compiler, {
        publicPath: WebpackConfig.output.publicPath,
      }));
      this.app.use(WHM(compiler));
    }
    this.app.use(Express.static(`${root}/views`));
    this.app.set('view engine', 'pug');
    this.app.use(cors({
      allowedHeaders: ['Content-Type'],
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      preflightContinue: false,
    }));
  }

    configureRoutes = () => {
      this.app.use('/static', Express.static('static', {
        etag: false,
        maxAge: 0,
        lastModified: false,
      }));
      this.app.use('/lib', Express.static('node_modules', {
        etag: false,
        maxAge: 0,
        lastModified: false,
      }));
      this.app.use('/api', Api(this.db));
      this.app.use('/', Web(this.db));
      return this;
    }

    handleError = () => {
      const errorHandler = new ErrorHandler({
        shouldLog: true,
      });
      this.app.use(errorHandler.build());
      this.app.use(errorHandler.unhandledRequest());

      return this;
    }

    listen() {
      http.createServer(this.app).listen(Config.get('port'), () => {
        console.log(`app is listening at port ${Config.get('port')}`);
      });
      return this;
    }

    configureDb = () => {
      this.db.connect();
      return this;
    }
}

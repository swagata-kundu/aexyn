import Express from 'express';
import * as bodyParser from 'body-parser';
import * as http from 'http';
import * as path from 'path';
import cors from 'cors';
import Config from 'config';
import Morgan from 'morgan';
import Helmet from 'helmet';


import ErrorHandler from './errorhandler';
import Db from './db';
import Api from '../api';
import Web from '../web';

const root = path.normalize(`${__dirname}/../..`);


export default class ExpressServer {
    constructor() {
        this.app = new Express();
        this.db = new Db();
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true,
        }));

        this.app.use(Morgan('dev'));
        this.app.use(Helmet());
        this.app.use(Express.static(`${root}/views`));
        this.app.use('/uploads', Express.static(`${root}/uploads`));

        this.app.set('view engine', 'pug');

        this.app.use(cors({
            allowedHeaders: ['Content-Type'],
            origin: '*',
            methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
            preflightContinue: false,
        }));
    }

    configureRoutes = () => {
        this.app.use('/api', Api(this.db));
        this.app.use('/web', Web());
        this.app.use('/static', Express.static('static', {
            etag: false,
            maxAge: 0,
            lastModified: false,
        }));
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
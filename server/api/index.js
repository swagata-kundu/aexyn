import Express from 'express';
import user from './user';

export default function routes(db) {
    return Express.Router().use('/user', user(db));
}
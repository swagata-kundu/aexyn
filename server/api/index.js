import Express from 'express';
import user from './user';
import company from './company';

export default function routes(db) {
  return Express.Router().use('/user', user(db))
    .use('/company', company(db));
}

import Express from 'express';
import Controller from './controller';

export default function (db) {
  const controller = new Controller(db);

  return Express
    .Router()
    .post('/signup', controller.signup)
    .post('/login', controller.login);
}

import Express from 'express';


export default function (db) {
  return Express
    .Router().get('/', require('./get_questions')(db))
    .post('/', require('./set_questions')(db))
}

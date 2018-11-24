import Express from 'express';


export default function (db) {
  return Express
    .Router()
    .get('/answers/:invitation_id', require('./get_answer')(db))
    .get('/', require('./get_questions')(db))
    .post('/answers', require('./save_answers')(db))
    .post('/', require('./set_questions')(db));
}

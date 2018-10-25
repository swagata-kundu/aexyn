import Express from 'express';

export default function () {
  return Express
    .Router()
    .get('/create-account*', (req, res) => res.render('create-account'))
    .get('/questionnaire*', (req, res) => res.render('questionnaire'))
    .get('/*', (req, res) => res.render('sign-in'));
}

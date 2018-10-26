import Express from 'express';

export default function () {
  return Express
    .Router()
    .get('/create-account*', (req, res) => res.render('create-account'))
    .get('/qualification-manager*', (req, res) => res.render('qualification-manager'))
    .get('/*', (req, res) => res.render('sign-in'));
}

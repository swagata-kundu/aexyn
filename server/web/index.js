import Express from 'express';

export default function () {
    return Express
        .Router()
        .get('/', (req, res) => res.render('index'));
}
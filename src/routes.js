const express = require('express');
const UserController = require('./controllers/UserController');
const UrlController = require('./controllers/UrlController');

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({ hello: 'world' })
})

routes.get('/urls/:id', UrlController.urlRedirect);

routes.post('/users/:user_id/urls', UrlController.urlInsert);

routes.get('/stats', UrlController.returnStats)

routes.get('/users/:user_id/stats', UrlController.returnUrlByUser);

routes.get('/stats/:id', UrlController.returnUrl);

routes.delete('/urls/:id', UrlController.urlDelete);

routes.post('/users', UserController.userInsert);

routes.delete('/user/:user_id', UserController.userDelete);

module.exports = routes;
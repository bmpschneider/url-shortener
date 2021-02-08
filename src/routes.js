const express = require('express');
const UserController = require('./controllers/UserController');
const UrlController = require('./controllers/UrlController');

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({ hello: 'world' })
})

routes.post('/users', UserController.store);

routes.post('/users/:user_id/url', UrlController.store)

routes.get('/users/:user_id/stats', UrlController.index)

routes.get('/stats/:id', UrlController.index2)

module.exports = routes;
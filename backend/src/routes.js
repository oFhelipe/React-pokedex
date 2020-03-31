const { Router } = require('express');

const { Joi, Segments, celebrate } = require('celebrate');

const routes = Router();

const  allController = require('./controller/allController');
const  pokemonController = require('./controller/pokemonController');

routes.get('/all', allController.index);

routes.post('/cad', allController.post);

routes.get('/pokemon/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().integer().required()
    }),
}), pokemonController.index);

module.exports = routes;
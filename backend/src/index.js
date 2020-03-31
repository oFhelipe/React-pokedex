const express = require('express');

const { errors } = require('celebrate');

const cors = require('cors');

const api = express();

const routes = require('./routes');

api.use(cors());
api.use(express.json());

api.use(routes);

api.use(errors());

api.listen(3333, ()=>{
    console.log(`API conectada na porta 3333`);
});
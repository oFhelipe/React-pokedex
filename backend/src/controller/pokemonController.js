const con = require('../database/connection');

module.exports = {

    async index(req, res){

        const { id } = req.params;

        const response = await con('pokedex').select('*').where({id});

        if(response === []){
            return res.json(response);
        }
        else{
            //return res.json({ error:'Pokemon not found' }); 
            return res.json(response);
        }
             

    }


 }
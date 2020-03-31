const con = require('../database/connection');

module.exports = {
    async index(req, res){

        const id =  Number(req.params.id);

        const response = await con('pokedex').select('*')

        res.json(response);

    },

    async post(req, res){
 
        const dados = require('../assets/dados.json');
        
       const response = await dados.map( async (item)=>{
              return await con('pokedex').insert({
                id:item.id,
                english:item.name.english,
                japanese:item.name.japanese,
                description:item.description,
                evolutions:item.evolutions.join(', '),
                type:item.type.join(', '),
                hp:item.base.hp,
                attack:item.base.attack,
                defense:item.base.defense,
                s_attack:item.base.s_attack,
                s_defense:item.base.s_defense,
                speed:item.base.speed,
            
           });
        });
        res.json({response});

    }
}
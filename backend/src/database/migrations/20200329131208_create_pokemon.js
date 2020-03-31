
exports.up = function(knex) {
  return knex.schema.createTable('pokedex', function(table){
        table.integer('id').primary();
        table.string('english').notNullable();
        table.string('japanese').notNullable();
        table.string('description').notNullable();
        table.string('evolutions').notNullable();
        table.string('type').notNullable();
        table.string('hp').notNullable();
        table.string('attack').notNullable();
        table.string('defense').notNullable();
        table.string('s_attack').notNullable();
        table.string('s_defense').notNullable();
        table.string('speed').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('pokedex');
};

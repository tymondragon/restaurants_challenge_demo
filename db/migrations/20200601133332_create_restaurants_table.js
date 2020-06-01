
exports.up = async function(knex) {
  await knex.schema.createTable('restaurants', table => {
    table.integer('id').primary()
    table.string('name').notNullable()
    table.string('place_id').notNullable()
    table.timestamps()
    table.unique(['name', 'place_id'])
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTable('resturants')
};

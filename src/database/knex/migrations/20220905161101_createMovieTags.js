exports.up = knex =>
  knex.schema.createTable('movieTags', table => {
    table.increments('id')
    table.text('name').notNullable()
    table.integer('user_id').references('id').inTable('users')
    table
      .integer('note_id')
      .references('id')
      .inTable('movieNotes')
      .onDelete('CASCADE')
  })

exports.down = knex => knex.schema.dropTable('movieTags')

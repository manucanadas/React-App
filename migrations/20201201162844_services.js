
exports.up = function (knex) {
    return knex.schema.createTable('services', table => {
      table.increments('id')
      table.string('name')
      table.string('image', 5000)
      table.string('description')
    })
  }
  
  exports.down = function (knex) {
    return knex.schema.dropTable('services')
  }

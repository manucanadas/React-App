
exports.up = function (knex) {
    return knex.schema.createTable('products_services', table => {
      table.increments('id')
      table.integer('service_id')
      table.integer('order_id')
      table.integer('quantity')
    })
  }
  
  exports.down = function (knex) {
    return knex.schema.dropTable('products_services')
  }

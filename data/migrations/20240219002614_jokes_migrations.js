/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("jokes", jokes => {
    jokes.increments("jokes_id")
    jokes.string("joke", 256)
        .notNullable()
    jokes.string("punchline", 256)
        .notNullable()
    jokes.float('rating')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("jokes")
};

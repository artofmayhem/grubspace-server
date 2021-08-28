exports.up = async (knex) => {
  await knex.schema.createTable("ingredients", (ingredient) => {
    ingredient.increments("ingredient_id").primary();
    ingredient.string("ingredient_name").notNullable();
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists("ingredients");
};

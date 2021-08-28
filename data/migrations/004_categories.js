exports.up = async (knex) => {
  await knex.schema.createTable("categories", (category) => {
    category.increments("category_id").primary();
    category.string("category_name").notNullable();
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists("categories");
};

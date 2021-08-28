exports.up = async (knex) => {
  await knex.schema.createTable("images", (image) => {
    image.increments("image_id").primary();
    image.string("image_source").notNullable();
  });
};

exports.down = async (knex) => {
    await knex.schema.dropTableIfExists("images");
};

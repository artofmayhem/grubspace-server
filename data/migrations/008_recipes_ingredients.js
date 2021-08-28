exports.up = async (knex) => {
  await knex.schema.createTable("recipes_ingredients", (recipe_ingredient) => {
    recipe_ingredient
      .integer("recipe_id")
      .notNullable()
      .references("recipe_id")
      .inTable("recipes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    recipe_ingredient
      .integer("ingredient_id")
      .notNullable()
      .references("ingredient_id")
      .inTable("ingredients")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    recipe_ingredient.string("quantity").notNullable().defaultTo("1");
    // recipe_ingredient.primary(["recipe_id", "ingredient_id"]);
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists("recipes_ingredients");
};

exports.up = async (knex) => {
  await knex.schema.createTable("instructions", (instruction) => {
    instruction.increments("instruction_id");
    instruction.string("instruction", 1200).notNullable();
    instruction.integer("step_number").notNullable();
    instruction
      .integer("recipe_id")
      .notNullable()
      .references("recipe_id")
      .inTable("recipes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists("instructions");
};

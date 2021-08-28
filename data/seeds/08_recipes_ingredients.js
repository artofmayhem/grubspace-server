exports.seed = function (knex) {
  return knex("recipes_ingredients")
  .del()
  .insert([
    {
      recipe_id: 1,
      ingredient_id: 1,
      quantity: "12oz",
    },
    {
      recipe_id: 1,
      ingredient_id: 2,
      quantity: "2oz",
    },
    {
      recipe_id: 1,
      ingredient_id: 4,
      quantity: "2oz",
    },
    {
      recipe_id: 1,
      ingredient_id: 5,
      quantity: "1oz",
    },
    {
      recipe_id: 1,
      ingredient_id: 6,
      quantity: "1oz",
    },
    {
      recipe_id: 1,
      ingredient_id: 7,
      quantity: "2 ea",
    },
    {
      recipe_id: 1,
      ingredient_id: 7,
      quantity: "2 slice",
    },
    {
      recipe_id: 1,
      ingredient_id: 8,
      quantity: "to taste",
    },
    {
      recipe_id: 1,
      ingredient_id: 9,
      quantity: "2 per",
    },
    {
      recipe_id: 2,
      ingredient_id: 39,
      quantity: "1 lb",
    },
    {
      recipe_id: 2,
      ingredient_id: 10,
      quantity: "1/4 c",
    },
    {
      recipe_id: 2,
      ingredient_id: 41,
      quantity: "1 lb",
    },
    {
      recipe_id: 2,
      ingredient_id: 32,
      quantity: "1/4 c",
    },
    {
      recipe_id: 2,
      ingredient_id: 12,
      quantity: "2 ea",
    },
    {
      recipe_id: 2,
      ingredient_id: 33,
      quantity: "1/4 c",
    },
    {
      recipe_id: 2,
      ingredient_id: 26,
      quantity: "1oz",
    },
    {
      recipe_id: 2,
      ingredient_id: 35,
      quantity: "1 tsp",
    },
    {
      recipe_id: 2,
      ingredient_id: 36,
      quantity: "16 oz",
    },
    {
      recipe_id: 2,
      ingredient_id: 37,
      quantity: "1/4 c",
    },
    {
      recipe_id: 2,
      ingredient_id: 29,
      quantity: "1/4 c",
    },
    {
      recipe_id: 2,
      ingredient_id: 38,
      quantity: "1/2 c",
    },
    {
      recipe_id: 3,
      ingredient_id: 12,
      quantity: "4 ea",
    },
    {
      recipe_id: 3,
      ingredient_id: 13,
      quantity: "8oz",
    },
    {
      recipe_id: 3,
      ingredient_id: 14,
      quantity: "2oz",
    },
    {
      recipe_id: 3,
      ingredient_id: 15,
      quantity: "1 TBSP",
    },
    {
      recipe_id: 3,
      ingredient_id: 16,
      quantity: "1 TBSP",
    },
    {
      recipe_id: 3,
      ingredient_id: 11,
      quantity: "1 bag",
    },
    {
      recipe_id: 3,
      ingredient_id: 20,
      quantity: "1 c",
    },
    {
      recipe_id: 3,
      ingredient_id: 17,
      quantity: "1 TBSP",
    },
    {
      recipe_id: 4,
      ingredient_id: 19,
      quantity: "1 TBSP",
    },
    {
      recipe_id: 4,
      ingredient_id: 14,
      quantity: "4 cups",
    },
    {
      recipe_id: 4,
      ingredient_id: 17,
      quantity: "1 TBSP",
    },
    {
      recipe_id: 4,
      ingredient_id: 8,
      quantity: "2 TBSP",
    },
    {
      recipe_id: 4,
      ingredient_id: 42,
      quantity: "1 ea",
    },
    {
      recipe_id: 4,
      ingredient_id: 2,
      quantity: "1oz",
    },
    {
      recipe_id: 4,
      ingredient_id: 9,
      quantity: "2 TBSP",
    },
    {
      recipe_id: 4,
      ingredient_id: 10,
      quantity: "5 TBSP",
    },
    {
      recipe_id: 4,
      ingredient_id: 29,
      quantity: "2 TBSP",
    },

  ]);
};

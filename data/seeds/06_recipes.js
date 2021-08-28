exports.seed = function (knex) {
  return knex("recipes")
    .del()
    .insert([
      {
        recipe_name: "Juicy Lucy Burger",
        recipe_description: "cheddar stuffed cheese burger",
        recipe_source: "Dad",
        user_id: 1,
        image_id: 1,
        category_id: 7,
      },
      {
        recipe_name: "Chicken Parmesan w/ Bucatini",
        recipe_description: "Family Dinner",
        recipe_source: "Food Network",
        user_id: 2,
        image_id: 2,
        category_id: 8,
      },
      {
        recipe_name: "Baked Strawberry French Toast",
        recipe_description: "favorite breakfast",
        recipe_source: "Me",
        user_id: 2,
        image_id: 3,
        category_id: 1,
      },
      {
        recipe_name: "Apple Cheddar Kale Salad",
        recipe_description: "My lunchtime jam",
        recipe_source: "NYT food section",
        user_id: 1,
        image_id: 4,
        category_id: 6,
      },
    ]);
};

exports.seed = function(knex) {
    return knex('users_recipes')
    .del()
    .insert([
      { user_id: 1, 
        recipe_id: 1, 
      },
      { user_id: 2, 
        recipe_id: 2, 
      },
      { user_id: 2,
        recipe_id: 3,
      },
      { user_id: 3, 
        recipe_id: 4,
      },
    ]);
    }


    
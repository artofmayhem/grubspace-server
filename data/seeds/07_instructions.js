exports.seed = function (knex) {
  return knex("instructions")
  .del()
  .insert([
    {
      instruction:
        "Form patty into a 6oz ball. Make a small divot in the ball to the center and place a 1oz of cheddar inside. Close ball around the hole and press into patty without exposing cheese.",
      step_number: 1,
      recipe_id: 1,
    },
    {
      instruction:
        "Heat oil in a large cast iron skillet over high until just smoking. Place patty in the center and season with salt and pepper on one side. Cook 4-5 mins per side ",
      step_number: 2,
      recipe_id: 1,
    },
    {
      instruction:
        "Once cooked to desired doneness. remove to resting plater. and toast bun until gbd (golden, brown, and delicious",
      step_number: 3,
      recipe_id: 1,
    },
    {
      instruction:
        "In a small bowl mix mix, mayo, ketchup, and relish until homogenous and spread on both sides of the bun. Add patty, dress with lettuce, tomato, onion and pickle. Enjoy!",
      step_number: 4,
      recipe_id: 1,
    },
    {
      instruction:
        'IMPORTANT: cook pasta until al dente the night before, toss with some olive oil and cook until the next day. By doing this the pasta forms "resistant starch" that is abosrbed by the body without spiking blood sugar or insulin levels.',
      step_number: 1,
      recipe_id: 2,
    },
    {
      instruction:
        "Butterfly the chicken breast by cutting horizontally lengthwise until almost through the other side and open it up so it's thinner and cooks more evenly. ",
      step_number: 2,
      recipe_id: 2,
    },
    {
      instruction:
        "Make containers and line up in this order, flour, egg wash (add an ounce or two of water and emersion blend to break down the texture for ease of breading), breadcrumbs. Season flour with salt and pepper. Working from flour to bread crumb, dredge in flour and place in egg with dry hand. With wet hand, make sure it's well coated and then transfer to breadcrumbs. With dry hand, cover with breadcrumbs and press into the flesh for maximum adherence. Set aside until al are done.  ",
      step_number: 3,
      recipe_id: 2,
    },
    {
      instruction:
        "Add 1/2 c oil to skillet and turn to med high heat (7 on electric range) and pan fry until gbd (golden, brown, and delicious) and remove to paper lined plate making sure to season immediately out of the pan. Repeat until all are done.",
      step_number: 4,
      recipe_id: 2,
    },
    {
      instruction:
        "In small pot add 1/3 c oil, garlic cloves, crushed red chili flake and bring up until garlic starts to lightly color over med heat. add tomatoes and basil. season to taste. simmer 30 mins",
      step_number: 5,
      recipe_id: 2,
    },
    {
      instruction:
        "Place chicken in a baking dish and cover with sauce, parmesan and mozzarella. Broil until (you know it gbd) and remove. Serve over bucatini",
      step_number: 6,
      recipe_id: 2,
    },
    {
      instruction:
        "In a large mixing bowl add cracked eggs, half and half, cinnamon, honey, vanilla. Whisk until homogenous.",
      step_number: 1,
      recipe_id: 3,
    },
    {
      instruction:
        "Cube bread and add to the mixture making sure to massage some of it while leaving about 30-40% fairly whole for textural purposes. Make sure bread is fully soaked and add mixture to a buttered baking dish with cut strawberries. Cover with plastic wrap and then foil and bake at 350 for 30 mins",
      step_number: 2,
      recipe_id: 3,
    },
    {
      instruction:
        "Remove covering, turn oven up to 400 and bake 15 more mins until golden. Remove and serve with a light drizzle of honey and reserved strawberries for garnish",
      step_number: 3,
      recipe_id: 3,
    },
    {
      instruction:
        "Chop kale into thin ribbons and place in a bowl with water and a tbs of salt to soften kale. let sit for 5 mins and rinse. Pat dry.",
      step_number: 1,
      recipe_id: 4,
    },
    {
      instruction:
        "In a large mixing bowl add all ingredients and toss well making sure to season to taste with salt and pepper",
      step_number: 2,
      recipe_id: 4,
    },
    {
      instruction:
        "Place in serving vessels and enjoy",
      step_number: 3,
      recipe_id: 4,
    },
  ]);
};

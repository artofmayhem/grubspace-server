exports.seed = function(knex) {
  return knex('ingredients')
  .del()
  .truncate()
  .insert([
    { ingredient_name: 'ground beef'},//1
    { ingredient_name: 'cheddar cheese'},//2
    { ingredient_name: 'hamburger bun'},//3
    { ingredient_name: 'mayonnaise'},//4
    { ingredient_name: 'ketchup'},//5
    { ingredient_name: 'relish'},//6
    { ingredient_name: 'kale'},//7
    { ingredient_name: 'almonds'},//8
    { ingredient_name: 'lemon juice'}, //9
    { ingredient_name: 'olive oil'}, //10
    { ingredient_name: 'sweet bread'}, //11
    { ingredient_name: 'eggs'},//12
    { ingredient_name: 'half and half'}, //13
    { ingredient_name: 'honey'},//14
    { ingredient_name: 'vanilla'}, //15
    { ingredient_name: 'cinnamon'}, //16
    { ingredient_name: 'salt'}, // 17
    { ingredient_name: 'sugar'}, //18
    { ingredient_name: 'coconut oil'}, //19
    { ingredient_name: 'strawberries'}, //20
    { ingredient_name: 'coconut milk'}, //21
    { ingredient_name: 'bacon'},  //22
    { ingredient_name: 'lettuce'}, //23
    { ingredient_name: 'tomatoes'}, //24
    { ingredient_name: 'onions'}, //25
    { ingredient_name: 'garlic'}, //26
    { ingredient_name: 'pickles'}, //27
    { ingredient_name: 'dijon mustard'}, //28
    { ingredient_name: 'parmesan cheese'}, //29
    { ingredient_name: 'black pepper'}, //30
    { ingredient_name: 'butter'}, //31
    { ingredient_name: 'ap flour'}, //32
    { ingredient_name: 'breadcrumbs'}, //33
    { ingredient_name: 'oregano'}, //34
    { ingredient_name: 'red pepper flakes'}, //35
    { ingredient_name: 'diced tomatoes'}, //36
    { ingredient_name: 'basil'}, //37
    { ingredient_name: 'mozzarella'}, //38
    { ingredient_name: 'bucatini'}, //39
    { ingredient_name: 'spaghetti'},  //40
    { ingredient_name: 'chicken breast'}, //41
    { ingredient_name: 'apple'}, //42
  ]);
};

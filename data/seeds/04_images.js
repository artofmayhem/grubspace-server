exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("images")
  .del()
  .truncate()
  .insert([
    {
      image_source:
        "https://lundsandbyerlys.com/wp-content/uploads/2020/06/Site480x330-LB0004.jpg",
    }, //juicy lucy
    {
      image_source:
        "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/7/11/0/FNK_the-best-chicken-parmesan_H_s4x3.jpg.rend.hgtvcom.616.462.suffix/1562853897238.jpeg",
    }, // chicken parmesan
    {
      image_source:
        "https://www.yellowblissroad.com/wp-content/uploads/2018/05/Strawberry-French-Toast-Bake-social.jpg",
    }, // strawberry french toast
    {
      image_source:
        "https://static01.nyt.com/images/2018/10/30/dining/apple-cheddar-kale-salad/merlin_145792368_0de6b697-1f58-47a9-a046-901c388cec32-articleLarge.jpg",
    }, // apple cheddar kale salad
  ]);
};

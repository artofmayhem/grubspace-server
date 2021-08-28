exports.seed = (knex) => {
  return knex("users")
  .insert([
    {
      user_id: 4,
      username: "admin",
      password: "$2y$14$tbXiGzQd.VpUPOUFoMRefeihG9i398gU.GosJa4.YG0XJ7IoXeQdS", // password is 'password'
      email: "admin@grubspaceeats.com",
    },
    {
      user_id: 5,
      username: "lukeSkywalker",
      password: "$2y$14$tbXiGzQd.VpUPOUFoMRefeihG9i398gU.GosJa4.YG0XJ7IoXeQdS", // password is 'password'
       email: "anakin@starwars.com",
    },
    {
      user_id: 6,
      username: "leiaOrgana",
      password: "$2y$14$tbXiGzQd.VpUPOUFoMRefeihG9i398gU.GosJa4.YG0XJ7IoXeQdS", // password is 'password'
      email: "leia@starwars.com",
    }
  ]);
};

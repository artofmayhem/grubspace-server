exports.up = async (knex) => {
  await knex.schema
    .createTable('users', (user) => {
      user.increments('user_id')
      user.string('username', 200).notNullable().unique()
      user.string('password', 200).notNullable()
      user.string('email', 320).notNullable()
    })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('users')
}

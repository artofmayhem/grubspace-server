const db = require('../../data/db-config')

function find() {
    return db('users').select('*')
}

function findBy(filter) {
    return db('users')
    .select('*')
    .where(filter)
    .first()
}

function findById(id) {
    return db('users')
    .select('*')
    .where({ user_id: id })
    .first()
}

async function add(user) {
    console.log("add user value from user model: ", user)
    const [id] = await db('users').insert(user).returning('user_id')
    return findById(id)
}

module.exports = {
    find,
    findBy,
    findById,
    add
}
const users = require('./users-model')

const checkEmailUnique = async (req, res, next) => {
    try {
        const user = await users.findByEmail(req.body.email)
        if (user) {
            res.status(400).json({
                message: 'Email already exists'
            })
        } else {
            next()
        }
    } catch (error) {
        next(error)
    }
}

const checkUsernameUnique = async (req, res, next) => {
    try {
        const user = await users.findById(req.params.id)
        if (user) {
            res.status(422).json({
                message: 'Username already exists'
            })
        } else {
            next()
        }
    } catch (error) {
        next(error)
    }
}

const checkUserExists = async (req, res, next) => {
    try {
        const {username} = req.body
        const user = await users.findBy({username})
        if (!user) {
            res.status(401).json({
                message: 'User does not exist'
            })
        }
     
    } catch (error) {
        next(error)
    }
}

module.exports = {
    checkEmailUnique,
    checkUsernameUnique,
    checkUserExists
}
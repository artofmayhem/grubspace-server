const { JWT_SECRET } = require('../../secrets/index')
const jwt = require('jsonwebtoken')

module.exports = async (req, res, next) => {
    try {
        const token = req.header('Authorization')

        if (!token) {
            return res.status(401).send({
                message: 'No token, authorization denied'
            })
        }

        jwt.verify(token, process.env.JWT_SECRET || JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).send({
                    message: 'Token is not valid'
                })
            }

            req.token = decoded
            next()
        })
      
    }
    catch (err) {
        console.log(err)
       next(err)
    }
}
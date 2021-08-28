const router = require('express').Router();
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../../secrets/index');
const bcrypt = require('bcryptjs');
const users = require('./users-model')


router.post("/register", async (req, res, next) => {
    console.log('users export: ',users)
	try {
		const { username, password, email } = req.body
		if(!username || !password || !email ){
			return res.status(400).json({
				message: "username, password, and email are required"
			})
		} else {
			const  hashpass = await bcrypt.hash(password, 5)
			const newUser = await users.add({
				username: username,
				password: hashpass,
				email: email,

			})
			res.status(201).json(newUser)
		}
	} catch (err) {
		next(err)
	}
})

router.post("/login", async (req, res, next) => {
	try {
		const { username, password } = req.body
		// console.log("in the try")
		const userObject = req.body
		if(!username || !password){
			return res.status(400).json({
				message: "username and password required"
			})
		}
		const user = await users.findBy({ username })
		const checkPassword = await bcrypt.compare(password,user.password)

		if (!user){
			// console.log("in the if")
			return res.status(401).json({
				message: "username or password incorrect"
			})
		} else {
			// console.log("in the else")
			const token = jwt.sign({
				subject: user.id,
				username: user.username
			}, JWT_SECRET, {expiresIn: "1d"})
			

			res.cookie("token", token)
			// console.log("pass the cookie")

			res.status(200).json({
				message: `Welcome back ${username}!`,
				token: token,
				user: userObject
			})
		}
		
	} catch (err) {
		console.log("in the catch")
		next(err)
	}
})

router.post("/logout", async (req, res, next) => {
	try {
		req.session.destroy((err) => {
			if (err){
				next(err)
			} else {
				res.status(204).end()
			}
		})
		
	} catch (err) {
		next(err)
	}
})

module.exports = router
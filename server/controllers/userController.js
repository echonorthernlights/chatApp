const asyncHandler = require('express-async-handler')
const User = require('../models/UserModel')
const generateToken = require('../utils/generateToken')
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, cpassword, image } = req.body
    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please Fill all the fields !!')
    }
    const userExist = await User.findOne({ email })
    if (userExist) {
        res.status(400)
        throw new Error('User already exists')
    }
    const user = await User.create({
        name, email, password, image
    })
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            image: user.image,
            token: generateToken(user._id)
        })
    } else {
        res.send('Faild to create new user !!')
    }

})
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        res.status(400)
        throw new Error('Please Fill all the fields !!')
    }
    const user = await User.findOne({ email })

    if (user && await user.matchPassword(password)) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            image: user.image,
            token: generateToken(user._id)
        })
    } else {
        res.send('Credentials !!')
    }

})

module.exports = { registerUser, authUser }

import User from "../Models/User.js";

import bcrypt from 'bcryptjs'

import { CreateError } from "../error.js";

import  Jwt  from "jsonwebtoken";





export const signup = async (req, res, next) => {
   
    console.log(req.body)

    try {
        const salt = bcrypt.genSaltSync(10)
        const hash =  await bcrypt.hash(req.body.password, salt)
         console.log(hash)

        const newuser = new User({ ...req.body, password: hash })
        await newuser.save()
        res.status(200).send("signin successfully");
    } catch (err) {
        next(err)
    }
}

export const signin = async (req, res, next) => {


    try {

        let user = await User.findOne({ email: req.body.email })

        if (!user) return next(CreateError(404, "user not found"))


        const checkpassword = await bcrypt.compareSync(req.body.password, user.password)

        if (!checkpassword) return next(CreateError(404, "creidential mis maching check once"))
      
        const token = Jwt.sign({ id: user._id, email: user.email }, 'key')
       
       
        const { password, ...others } = user._doc

        res.cookie('accesstoken', token, { httpOnly: true, secure: true }).status(200).json(others)

    } catch (err) {
        next(err)
    }
}


 export const googleauth = async (req, res, next) => {

    try {

        const user = await User.findOne({ email: req.body.email })

        if (user) {

            const token = Jwt.signin({ id: user._id }, "key")
            req.cookie("accesstoken", token, { httpOnly: true }).status(200).json(user)

        } else {

            const newuser = new User({ ...req.body, fromGoogle: true })
            await newuser.save()
            const token = Jwt.signin({ id: newuser._id }, "key");
            req.cookie("accesstoken", token, { httpOnly: true }).status(200).json(newuser)
        }

    } catch (err) {

        next(err);
    }
}
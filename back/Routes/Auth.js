import express from 'express'
import { googleauth, signin, signup } from '../Controlers/Auth.js'


const router = express.Router()



router.post('/signup', signup)

router.post('/signin' , signin )

router.post('/google', googleauth)

export default router;
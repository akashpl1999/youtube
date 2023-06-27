import express from 'express'

import { Update, Delete, getUser, Subscriber , Unsubscribe, like, dislike} from '../Controlers/User.js'

import { verifytoken } from '../Verifytoken.js'


const router = express.Router()



router.put('/:id',verifytoken, Update)


router.delete('/:id' ,verifytoken, Delete )


router.get('/find/:id', getUser)


router.put('/sub/:id', Subscriber)


router.put('/unsub/:id', Unsubscribe)


router.put('/like/:id',verifytoken, like)


router.put('/dislike/:id',verifytoken, dislike)



export default router;















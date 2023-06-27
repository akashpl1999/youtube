import express from 'express'
import { addcomment, deleteComment, getComments,  } from '../Controlers/Comment.js'

import { verifytoken } from '../Verifytoken.js'


const router = express.Router()




    router.post('/', verifytoken, addcomment)

    router.get("/:videoid", getComments)

    router.delete('/:id',verifytoken, deleteComment)


 export default router;

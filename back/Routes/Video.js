import express from 'express';
import { addVideo, deleteVideo, updateVideo, addViewcount, trend , getByTag, search, Subscribedchannel, getvideo } from '../Controlers/Video.js';

 import { verifytoken } from '../Verifytoken.js';
 
 const router = express.Router();

 
router.post('/', verifytoken, addVideo)  /// as  we useing req.user in contoller by jwt 
router.delete('/:id', verifytoken, deleteVideo)


router.put('/:id', verifytoken, updateVideo)

router.put('/view/:id', addViewcount)

router.get('/find/:id', getvideo)
router.get('/trend', trend)
router.get('/search', search)
router.get('/tags', getByTag)
router.get('/sub', Subscribedchannel)






  export default router;
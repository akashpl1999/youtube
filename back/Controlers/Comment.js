import { CreateError } from "../error.js";
import Video from "../Models/Video.js";
import Commets from "../Models/Commets.js";




 export const addcomment=async(req, res, next)=>{
   
    try {
         const newcommets=  new Commets({...req.body , userId:req.user.id})

         const savedcommets= await newcommets.save()

         res.status(200).send(savedcommets);


    }catch(err){
        next(err)
    }
 }


 export const deleteComment = async (req, res, next) => {
    try {
      const comment = await Commets.findById( res.params.id);
  
      const video = await Video.findById(res.params.id);


      if (req.user.id === comment.userId || req.user.id === video.userId) {

        await Commets.findByIdAndDelete(req.params.id);

        res.status(200).json("The comment has been deleted.");

      } else {

        return next(createError(403, "You can delete ony your comment!"));
      }
    } catch (err) {
      next(err);
    }
  };
  

  export const getComments = async (req, res, next) => {
    try {
   
      const comments = await Commets.find({ videoId: req.params.videoId });
      res.status(200).json(comments);
  
    } catch (err) {

        next(err);

    }
  };
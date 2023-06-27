import User from "../Models/User.js";

import Video from "../Models/Video.js";

import { CreateError } from "../error.js";



export const addVideo = async (req, res, next) => {

    const newVideo = new Video({ userId: req.user.id , ...req.body });

    try {

      const savedVideo = await newVideo.save();
      res.status(200).json(savedVideo);


    } catch (err) {

      next(err);
    }
  };
  

export const updateVideo=async(req, res, next)=>{


    try{

        const video = await Video.findById(req.params.id);
        if (!video) return next(createError(404, "Video not found!"));
        if (req.user.id === video.userId) {
          const updatedVideo = await Video.findByIdAndUpdate(
            req.params.id,
            {
              $set: req.body,
            },
            { new: true }
          );
          res.status(200).json(updatedVideo);

        }else{

            return next(CreateError(403, " you can updated this viodeo"))
        }

      } catch(err){

        next(err)
    }
}


    export const deleteVideo = async (req, res, next) => {
      
        try {

          const video = await Video.findById({_id:req.params.id});

          if (!video) return next(createError(404, "Video not found!"));

          if (req.user.id === video.userId) {

            await Video.findByIdAndDelete({_id:req.params.id});

            res.status(200).json("The video has been deleted.");


          } else {

            return next(createError(403, "You can delete only your video!"));
          }
        } catch (err) {

          next(err);
        }
      };
       


export const addViewcount = async (req, res, next) => {
  try {
    await Video.findByIdAndUpdate(req.params.id, {
      $inc: { views: 1 },
    });
    res.status(200).json("The view has been increased.");
  } catch (err) {
    next(err); 
  }
};



export const random = async (req, res, next) => {
    try {
      const videos = await Video.aggregate([{ $sample: { size: 40 } }]);  // sample is th mongodb operter   it is used to  get  random data from collections
      res.status(200).json(videos);
    } catch (err) {
      next(err);
    }
  };
  

  export const trend = async (req, res, next) => {
    try {
      const videos = await Video.find().sort({ views: -1 });    /// here it get the data from collection ,  were views  count  from  high count to low count of  views;
      res.status(200).json(videos);
    } catch (err) {
      next(err);
    }
  };
  


  export const getvideo = async (req, res, next) => {
    try {
      const video = await Video.find({_id:req.params.id})   /// here it get the data from collection ,  were views  count  from  high count to low count of  views;
      res.status(200).json(video);


    } catch (err) {
      next(err);
    }
  };
  


  export const Subscribedchannel=async(req, res, next)=>{
    
    try{
        const user=await User.findOne({_id : req.user.id})
        const subscribedchannels= user.subscribedUsers;
        const list = await Promise.all(
            subscribedchannels.map( async(channelid)=>{
                 return await Video.find({userId: channelid})
            }) )
         res.status(200).json(list)
        
    }catch(err){
        next(err)
    }
  }


  export const getByTag=async(req, res, next)=>{
    
    const  tags= req.query.tags.split(',')   // waht are the queries enter in front  ,  collectivly beacome  the array  
      
    try{

         const vidios =await Video.find({tags:{$in:tags}}).limit(10)

          res.status(200).json(vidios)



    }catch(err){
        next(err)
    }
  }



  export const search = async (req, res, next) => {
    const query = req.query.q;
    try {
      const videos = await Video.find({

        title: { $regex: query, $options: "i" },

      }).limit(40);
      res.status(200).json(videos);

    } catch (err) {


      next(err);
    }
  };
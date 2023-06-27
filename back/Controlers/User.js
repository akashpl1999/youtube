import { CreateError } from "../error.js";
import User from "../Models/User.js";
import Video from "../Models/Video.js";



 export const Update=async(req, res , next)=>{
     console.log(req.user)
     console.log(req.params.id)

    if(req.params.id === req.user.id){

         try{

            const updatedUser = await User.findByIdAndUpdate(
                req.params.id,
                {
                  $set: req.body,
                },
                { new: true }
              );
              res.status(200).json(updatedUser);
        

         }catch(err){
            next(err)
         }

    }else{

        return CreateError(403, " you can change your account only")
    }
 }


 

 export const Delete=async(req, res , next)=>{


    if(req.paramas.id === req.user.id){

         try{

            const deleteUser = await User.findByIdAndDelete( req.params.id);
              res.status(200).json("deleted sceessfully");
        

         }catch(err){
            next(err)
         }

    }else{

        return CreateError(403, " you can change your account only")
    }
 }


 export const getUser = async (req, res, next) => {
   
    try {
      const user = await User.findById(req.params.id);

      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  };
  


   export const Subscriber= async(req, res, next)=>{


    try{

          await User.findByIdAndUpdate({_id:req.params.id},  {$push : {subscribedUsers:req.params.id}})

          await User.findByIdAndUpdate({_id:req.paramas.id},  {$inc:{subscribers:1} , })

           res.status(200).send("subscribed successfully")

    }catch(err){

        next(err)
    }
   }


    export const Unsubscribe =async(req, res, next)=>{

        try{

            await User.findByIdAndUpdate({_id:req.params.id}, {$pull: {subscribedUsers: req.paramas.id}, })

            await User.findByIdAndUpdate({_id:req.paramas.id}, {$inc: {subscribers: -1 }, })

            res.status(200).send("You unsubscribed successfully")


        }catch(err){

            next(err)
        }
    }



    export const like =async(req, res, next)=>{

          const id= req.user.id
          const  videoid= req.paramas.videoid;

        try{

             await Video.findByIdAndUpdate({_id:videoid}, 
                
                {
                    $addToSet:{likes:id},
            
                     $pull:{dislikes:id}
                 }
            )

             res.status(200).send("like added")
        }catch(err){
            next(err)
        }
    }


    export const dislike=async(req, res, next)=>{

        const id= req.user.id

        const videoid= req.params.videoid;


        try{
            await Video.findByIdAndUpdate({_id:videoid},
                
                  {
                      $addToSet:{dislikes:id},
                      $pull:{likes:id}

                  }
                
                )

                res.status(200).send("dislike added")
  

        }catch(err){

            next(err)

        }
    }
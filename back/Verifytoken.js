import Jwt from "jsonwebtoken";
import { CreateError } from "./error.js";



export const verifytoken = (req, res, next) => {
    
    const token = req.cookies.accesstoken;

     console.log(token)
     
    if (!token) return next(CreateError(404, "token not found"))

    Jwt.verify(token, 'key', (err, user) => {

        if (err) next(CreateError(404, "token not mached"))

        req.user = user

        next()
    })
}


// export const authorization = (req, res, next) => {

//     const authheader = req.headers.authorization;

//     if (!authheader || !authheader.startsWith('Bearer')) return next(CreateError(404, "not found token"))

//     const token = authheader.split(' ')[1]  /// as we send    Bearer token   , .split  after thr bearer there is space based on that it returns the  array, now the token is at index 2;

//     Jwt.verify(token, 'key', (err, user) => {

//         if (err) return next(CreateError(404, "not found token"))
//         req.user = user
//         next()
//     })

// }




// export const authorization1 = async (req, res, next) => {

//     try {
    
//         const authheader = req.headers.authorization;
    
//         if (!authheader || !authheader.startsWith('Bearer')) return next(CreateError(404, "not found token"))


       
//         const token = authheader.split(' ')[1]  /// as we send    Bearer token   , .split  after thr bearer there is space based on that it returns the  array, now the token is at index 2;
      


//         const user = Jwt.verify(token, 'key')
       
//         req.user = user

//         next()

//     } catch (err) {

//         next(CreateError(400, "token verification failed"))
//     }


// }

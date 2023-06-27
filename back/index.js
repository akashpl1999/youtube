import mongoose from "mongoose";
import express from 'express'
import cors from 'cors';
import Userroutes  from './Routes/User.js'
import Videoroutes from './Routes/Video.js'
import Commentsroutes from './Routes/Comment.js'
import Authroutes from './Routes/Auth.js'
import cookieParser from "cookie-parser";
const port = 9000;
const app = express()




const connected = async () => {

    try {

        await mongoose.connect("mongodb://localhost:27017/Youtube", { useNewUrlparser: true, useUnifiedTopology: true })
        console.log('connected')

    } catch (err) {
        console.log(err)

    }
}

connected()


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())


app.use('/user', Userroutes)
app.use('/auth', Authroutes)
app.use('/comment' ,Commentsroutes)
app.use('/video', Videoroutes)


app.use((err,req, res, next)=>{

     const status = err.status || 500 
     
     const message = err.message || "err is accured in index app use"

     return res.status(status).json({success: false, status,message })

})




app.listen(port, (err) => {
    if (err) throw err;
    console.log(`the port is running in ${port}`)
})


import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/users.route.js'
import { authRouter } from './routes/auth.route.js'


const app = express()
app.use(express.json())
dotenv.config()

const port = process.env.port || 3000

app.use('/api/users', userRouter)
app.use('/api/auth', authRouter)

app.use((err, req, res, next) =>{
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal Server Error'
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode
    })
})

    mongoose.connect(process.env.MONGO).then(() =>{
        console.log('Connected to database.....')
        app.listen(port, () =>{
     console.log(`App listening on port ${port}`)
    })
}).catch(err => {
    console.log(err)
    
})






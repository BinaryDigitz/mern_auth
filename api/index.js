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


    mongoose.connect(process.env.MONGO).then(() =>{
    console.log('Connected to database.....');
    
    app.listen(port, () =>{
     console.log(`App listening on port ${port}`)
        
    })
}).catch(err => {
    console.log(err)
    
})






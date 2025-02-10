import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

const app = express()
app.use(express.json())
dotenv.config()

const port = process.env.port || 3000
const db = {
    username: 'borisndoh',
    password:'Y79a6Qnx603Lhl4X'
}

    mongoose.connect(process.env.MONGO).then(() =>{
    console.log('Connected to database.....');
    
    app.listen(port, () =>{
     console.log(`App listening on port ${port}`)
        
    })
}).catch(err => {
    console.log(err)
    
})






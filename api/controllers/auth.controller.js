import Joi from "joi"
import { User } from "../model/user.model.js"
import bcryptjs from 'bcryptjs'


function validateUser(user){
    const schema = Joi.object({
        username: Joi.string().min(3).max(30).required(),
        email: Joi.string().min(3).max(30).required(),
        password: Joi.string().min(3).max(100).required()
       
    })
    return schema.validate(user)
}
export async function Signup(req, res, next){
    const { error } = validateUser(req.body)
    if(error) return res.status(400).send(error.details[0].message)
        const { username, email, password } = req.body
    const hashedPassword = bcryptjs.hashSync(password, 10)
  const user = new User({username, email, password:hashedPassword})
  
  try{
    await user.save()
    res.status(201).json({message: 'User created successfully..!'})
  }
  catch(err){
    next(err)
  }
}
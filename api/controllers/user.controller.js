import { User } from "../model/user.model.js";
import Joi from "joi";


function validateUser(user){
    const schema = Joi.object({
        username: Joi.string().min(3).max(30).required(),
        email: Joi.string().min(5).required(),
        password:Joi.string().min(6)
    })
    return schema.validate(user)
}

export async function getUsers(req, res){
 const users = await User.find({}).sort('username')
 if(!users) return res.status(404).send('Users not found')
    res.status(200).send(users)
}


export async function getUser(req, res){
    const {id} = req.params.id
    if(!id) res.status(404).send('User with given id not found')
 const user = await findById(id)
res.status(200).send(user)
}
export async function createUser(req, res){
    const {error} = validateUser(req.body)
    if(!error) return error
    let user = await new User(req.body)
    user.save()
    res.status(202).send(user)
}
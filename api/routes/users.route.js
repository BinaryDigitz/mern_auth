
import { getUsers, getUser, createUser } from '../controllers/user.controller.js'
import { Router } from 'express'

const userRouter = Router()

userRouter.get('/', getUsers)
userRouter.get('/:id', getUser)
userRouter.post('/', createUser)

export default userRouter;
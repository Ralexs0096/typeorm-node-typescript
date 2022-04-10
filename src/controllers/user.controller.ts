import { Request, Response } from 'express'
import { User } from '../entities/User'

export const createUser = async (req: Request, res: Response) => {
  try {
    const { firstname, lastname } = req.body
    const user = new User()
    user.firstname = firstname
    user.lastname = lastname

    await user.save()

    res.json(user)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message })
    }
  }
}

export const getUsers = async (req: Request, res: Response) => {
  const users = await User.find()
  return res.json(users)
}

// TODO: Make the update and delete function work

export const updateUser = async (req: Request, res: Response) => {
  return res.json({})
}

export const deleteUser = async (req: Request, res: Response) => {
  return res.json({})
}

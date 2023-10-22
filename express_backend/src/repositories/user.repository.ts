import {getRepository} from "typeorm";
import {User} from '../models'
import generateHashPassword from '../utils/generateHashPassword'

export interface IUserPayload {
  firstName: string;
  lastName: string;
  password: string;
  email: string
}

export const getUsers  = async () :Promise<Array<User>> => {
  const userRepository = getRepository(User);
  return userRepository.find()
}

export const createUser  = async (payload: IUserPayload) :Promise<User> => {
  const userRepository = getRepository(User);
  const { password } = payload

  payload.password = generateHashPassword(password)
  const user = new User()
  return userRepository.save({
    ...user,
    ...payload
  })

}

export const getUserById  = async (id: string) :Promise<User | null> => {
  const userRepository = getRepository(User);
  const user = await userRepository.findOne({id: id})
  if (!user) return null
  return user
}

export const checkUserExist  = async (email: string) :Promise<boolean> => {
  const userRepository = getRepository(User);
  const user = await userRepository.findOne({email})
  if (!user) return false
  return true
}

export const updateUser  = async (id: string, payload: IUserPayload) :Promise<User | null> => {
  const userRepository = getRepository(User);
  const user = await userRepository.findOne({id: id})
  if (!user) return null
  const { password } = payload
  if (password){
    payload.password = generateHashPassword(password)
  }
  return userRepository.save({
    ...user,
    ...payload
  });
}

export const deleteUser  = async (id: string) :Promise<boolean> => {
  const userRepository = getRepository(User);
  const user = await userRepository.findOne({id: id})
  if (!user) return false
  await userRepository.remove(user)
  return true
}

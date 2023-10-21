import {Get, Route, Tags, Post, Body, Path, Put, Delete} from "tsoa";
import {User} from '../models'
import {
    getUsers, 
    createUser, 
    IUserPayload, 
    getUserById, 
    deleteUser, 
    updateUser,
    checkUserExist
} from '../repositories/user.repository'

@Route("users")
@Tags("User")
export default class UserController {
    @Get("/")
    public async getUsers(): Promise<Array<User>> {
        return getUsers()
    }

    @Post("/")
    public async createUser(@Body() body: IUserPayload): Promise<User> {
        const email = body.email
        const isUserExist = await checkUserExist(email)
        if (isUserExist) {
            throw Error("User exist")
        }
        return createUser(body)
    }


    @Get("/:id")
    public async getUserById(@Path() id: string): Promise<User | null> {
        return getUserById(id)
    }

    @Put("/:id")
    public async updateUser(@Path() id: string, @Body() body: IUserPayload): Promise<User | null> {
        return updateUser(id, body)
    }

    @Delete("/:id")
    public async deleteUser(@Path() id: string): Promise<boolean> {
        return deleteUser(id)
    }

}

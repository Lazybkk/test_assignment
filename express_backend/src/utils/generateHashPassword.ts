import bcrypt from 'bcrypt'



export default function generateHashPassword(password: string): string{
    const rounds = 10
    return bcrypt.hashSync(password, rounds)
}



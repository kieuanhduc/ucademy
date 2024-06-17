"use server"

import { connectToDatabase } from '@/lib/mongoose';
import User , {IUser} from '@/app/databases/user.model';

export default async function createUser(params:IUser){
    try{
        connectToDatabase(params);

        const newUser = await User.create(params);
        return newUser;
    }catch(error){
        console.log(error)
    }
}
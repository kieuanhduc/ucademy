"use server";

import User from "@/app/database/user.model";
import { TCreateUserParams } from "@/types";
import { connectToDatabase } from "../mongoose";
import { IUser } from "../../app/database/user.model";

export  async function createUser(params: TCreateUserParams) {
    try {
        connectToDatabase();
        const newUser = await User.create(params);
        return newUser;
    } catch(error) {
        console.log(error);
    }
}

export async function getUserInfo({ userId }: { userId: string }) : Promise<IUser | undefined> {
    try {
        connectToDatabase();
        const getUser = await User.findOne({clerkId:userId});
        if (!getUser) return undefined;
        return getUser;
    } catch (error) {
        console.log(error);
    }
}

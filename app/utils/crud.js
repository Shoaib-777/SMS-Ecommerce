'use server'

import { redirect } from "next/navigation";
import ConnectDB from "../DB/ConnectDB";
import Users from "../models/Users";
import bcrypt from 'bcrypt'

export const AddUserf = async (formData) => {
    const { username, email,phone, password} = Object.fromEntries(formData);
    try {
        await ConnectDB();
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt)
        const newUser = new Users({
            username, email, phone, password : hashedPassword,
        })
        await newUser.save()
        console.log("user created succesfully ")
    } catch (err) {
        console.log('failed to create user', err)
        throw new Error("failed to create user")
    }
    redirect('/')
}


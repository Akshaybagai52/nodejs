import express, { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const app = express();

interface User {
  username: string;
  password: string;
}

let users: User[] = [];

app.post('/register', async (req:Request, res:Response) => {
    const {username, password} = req.body
    const existingUser = users.find(user => user.username === username)
    if(existingUser) return res.status(400).json({message: "user already exists"})
    const hashedPassword = await bcrypt.hash(password, 10)
    const user:User = {
        username,
        password: hashedPassword
    }
    users.push(user)
})

app.listen(3000, () => {
  console.log("listening to PORT 3000");
});

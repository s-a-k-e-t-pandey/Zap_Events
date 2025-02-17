import { Router } from "express";
import {authMiddleware} from "../middleware"
import { SigninSchema, SignupSchema } from "../types";
import {prismaClient} from "../db"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";
import { JWT_PASSWORD } from "../config";

const router = Router();

router.post("/signup", async (req: any, res: any)=>{
    const body = req.body;
    const parsedData = SignupSchema.safeParse(body);

    if(!parsedData.success){
        return res.status(411).json({
            msg: "Incorrect Credentials"
        })
    }
    const existingUser = await prismaClient.user.findFirst({
        where: {
            email: parsedData.data.username,
        }
    }) 
    if(existingUser){
        return res.status(403).json({
            msg: "User already exist"
        })
    }

    const hashedPassword = bcrypt.hash(parsedData.data.password, 10);

    await prismaClient.user.create({
        data: {
            email: parsedData.data.username,
            password: JSON.stringify(hashedPassword),
            name: parsedData.data.name
        }
    })

    //Todo : await sendEmail();
    
    return res.json({
        msg: "please verify your account by checking email"
    })
})

router.post('/signin', async (req: any, res: any)=>{
    const body = req.body;
    const parsedData = SigninSchema.safeParse(body);

    if(!parsedData.success){
        return res.json({
            msg: "Invalid credentials"
        })
    }
    const user = await prismaClient.user.findFirst({
        where: {
            email: parsedData.data.username
        }
    })
    if(!user){
        return res.status(404).json({
            msg: "Invalid Attempt"
        })
    }
    const parasedValidation = bcrypt.compare(parsedData.data.password, user.password)
    if(!parasedValidation){
        return res.status(411).json({
            msg: "Invalid Password"
        })
    }

    const token = jwt.sign({
        id: user.id
    }, JWT_PASSWORD)

    res.json({
        token: token
    })

})

router.get("/", authMiddleware, async (req: any, res:any) => {
    // TODO: Fix the type
    // @ts-ignore
    const id = req.id;
    const user = await prismaClient.user.findFirst({
        where: {
            id
        },
        select: {
            name: true,
            email: true
        }
    });

    return res.json({
        user
    });
})

export const userRoute = router;
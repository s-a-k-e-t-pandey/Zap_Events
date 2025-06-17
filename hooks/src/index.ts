import express from "express"
import {PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const client = new PrismaClient();

const app = express();
app.use(express.json());

// https://hooks.zapier.com/hooks/catch/17043103/22b8496/
// password logic
app.post("/hooks/catch/:userId/:zapId", async (req: any, res: any) => {
    const userId = req.params.userId;
    const zapId = req.params.zapId;
    const body = req.body;
    console.log("Received request with userId:", userId, "type:", typeof userId);
    console.log("Received request with zapId:", zapId, "type:", typeof zapId);
    console.log("Request body:", body);    // store in db a new trigger
    const zap = await client.zap.findFirst({
        where: {
            id : zapId,
            userId : parseInt(userId)
        },
        include : {
            actions: {
                include : {
                    type : true
                }
            },
            trigger : {
                include : {
                    type : true   //enables actions and trigger type
                }
            }
        }
    })
    console.log("ZAP"+zap)
    if(!zap) {
        return res.status(404).json({
            message: "Zap not Found",
            debug: {
                userId: userId,
                userIdParsed: parseInt(userId),
                zapId: zapId,
                requestPath: req.path
            }
        });
    }
    await client.$transaction(async tx => {
        const run = await tx.zapRun.create({
            data: {
                zapId: zapId,
                metadata: body
            }
        });;

        await tx.zapRunOutbox.create({
            data: {
                zapRunId: run.id
            }
        })
    })
    res.json({
        message: "Webhook received"
    })
})

app.listen(3002);
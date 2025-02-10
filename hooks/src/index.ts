import express from "express"
import {PrismaClient} from "@prisma/client"
const client = new PrismaClient();

const app = express();
app.use(express.json());


app.post('/hooks/catch/:userId/:zapId', async (req, res)=>{
    const userId = req.params.userId;
    const zapId = req.params.zapId;
    const body = req.body;

    await client.$transaction(async tx =>{
        const run = await client.zapRun.create({
            data : {
                zapId : zapId,
                metadata : body
            }
        })
        await client.zapRunOutBox.create({
            data : {
                zapRunId : run.id
            }
        })
    })
    res.json({
        msg: "webhook received"
    })
})


app.get('/api/v1/')

app.listen(3000);
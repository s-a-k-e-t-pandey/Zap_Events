import express from "express";
import cors from "cors"
import { userRoute } from "./router/user";
import { zapRoute } from "./router/zap";
import {triggerRouter} from "./router/trigger";
import { actionRouter } from "./router/action";


const app = express();
app.use(express.json());
app.use(cors())

app.use("/api/v1/user", userRoute);

app.use("/api/v1/zap", zapRoute);
app.use("/api/v1/trigger", triggerRouter);
app.use("/api/v1/action", actionRouter);


app.listen(3000);
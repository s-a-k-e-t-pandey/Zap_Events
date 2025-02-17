import express from "express";
import cors from "cors"
import { userRoute } from "./router/user";
import { zapRoute } from "./router/zap";

const app = express();
app.use(express.json());
app.use(cors())

app.use("/api/v1/user", userRoute);

app.use("/api/v1/zap", zapRoute);


app.listen(3000);
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const client = new client_1.PrismaClient();
const app = (0, express_1.default)();
app.use(express_1.default.json());
// https://hooks.zapier.com/hooks/catch/17043103/22b8496/
// password logic
app.post("/hooks/catch/:userId/:zapId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.userId;
    const zapId = req.params.zapId;
    const body = req.body;
    console.log("Received request with userId:", userId, "type:", typeof userId);
    console.log("Received request with zapId:", zapId, "type:", typeof zapId);
    console.log("Request body:", body); // store in db a new trigger
    const zap = yield client.zap.findFirst({
        where: {
            id: zapId,
            userId: parseInt(userId)
        },
        include: {
            actions: {
                include: {
                    type: true
                }
            },
            trigger: {
                include: {
                    type: true //enables actions and trigger type
                }
            }
        }
    });
    console.log("ZAP" + zap);
    if (!zap) {
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
    yield client.$transaction((tx) => __awaiter(void 0, void 0, void 0, function* () {
        const run = yield tx.zapRun.create({
            data: {
                zapId: zapId,
                metadata: body
            }
        });
        ;
        yield tx.zapRunOutbox.create({
            data: {
                zapRunId: run.id
            }
        });
    }));
    res.json({
        message: "Webhook received"
    });
}));
app.listen(3002);

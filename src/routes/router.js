import { Router } from "express";
import authRouter from "./auth.routes.js";


const apiRouter = Router();

apiRouter.get("/ping", (req, res) => {
  res.status(200).json({ message: "pong" });
});

apiRouter.use("/auth", authRouter);


export default apiRouter;
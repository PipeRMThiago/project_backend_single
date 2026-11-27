import { Router } from "express";
import authRouter from "./auth.routes.js";
import taskRouter from "./task.routes.js";


const apiRouter = Router();

apiRouter.get("/ping", (req, res) => {
  res.status(200).json({ message: "pong" });
});

apiRouter.use("/auth", authRouter);
apiRouter.use("/task", taskRouter);


export default apiRouter;
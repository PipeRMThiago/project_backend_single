import { Router } from "express";

const apiRouter = Router();

apiRouter.get("/ping", (req, res) => {
  res.status(200).json({ message: "pong" });
});

export default apiRouter;
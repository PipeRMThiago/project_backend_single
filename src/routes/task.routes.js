import { Router } from "express";
import taskController from "../controllers/task.controller.js";
// import solutionController from "../controllers/solution.controller.js";
import { isAuthenticated, isAdmin } from "../middlewares/auth.middleware.js";

// Documentación de estas rutas (Swagger): src/docs/tasks.yaml
const taskRouter = Router();

// task: leer es público; crear, editar y borrar requiere login
taskRouter.get("/", taskController.listarTask);
taskRouter.get('/:id', taskController.obtenerTask);
// taskRouter.post("/", isAuthenticated, taskController.create);
// taskRouter.patch("/:id", isAuthenticated, taskController.update);
// taskRouter.delete("/:id", isAuthenticated, taskController.remove);

// Soluciones
// taskRouter.post("/:id/solutions", isAuthenticated, solutionController.create);
// taskRouter.delete("/:id/solutions/:solutionId", isAuthenticated, solutionController.remove);
// taskRouter.patch("/:id/solutions/:solutionId/verify", isAuthenticated, isAdmin, solutionController.verify);

export default taskRouter;

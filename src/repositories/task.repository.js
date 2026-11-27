import { taskModel } from "../models/task.model.js";

const listarTask = async () => {
    return await taskModel.find().sort({
        created_at: -1
    });
};

const obtenerTaskPorId = async (id) => {
    console.log(id);
    
  return await taskModel.findById(id);
};

export default {
    listarTask,
    obtenerTaskPorId
}
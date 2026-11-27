import taskRepository from "../repositories/task.repository.js";
import mongoose from "mongoose";

const listarTask = async (req, res) => {
    try {
        const task = await taskRepository.listarTask();

        return res.status(200).json({
            ok: true,
            data: task
        });

    } catch (error) {
        console.error("Error al listar historial:", error);

        return res.status(500).json({
            ok: false,
            message: "Error al obtener las tareas"
        });
    }
};

export const obtenerTask = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ message: 'El id no es válido' });
    }

    const task = await taskRepository.obtenerTaskPorId(id);
console.log(task);

    if (!task) {
      return res.status(404).json({ message: 'Tarea no encontrada' });
    }

    return res.status(200).json(task);
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener la tarea', error: error.message });
  }
};

export default {listarTask, obtenerTask};
import { Schema, model } from "mongoose";


const taskSchema = new Schema(
    {
        task: {
            type: String,
            required: [true, "La lista de tarea no puede quedar vacía"],
            trim: true,
            minlength: [3, "El nombre de usuario debe tener al menos 3 caracteres"],
            maxlength: [20, "El nombre de usuario no puede tener más de 20 caracteres"]
        }
    },
    {
        timestamps: true, // añade createdAt y updatedAt
        toJSON: {
            // Al convertir a JSON (res.json) quitamos la contraseña y __v
            transform: (_doc, ret) => {
                const { password, __v, ...user } = ret;
                return user;
            }
        }
    }
);

export const taskModel = model ("task",taskSchema);
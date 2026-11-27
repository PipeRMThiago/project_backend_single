const now = new Date();
const hashAdmin = "$2b$10$EjemploHashBcryptParaAdmin1234567890123456789012345";
const hashUser = "$2b$10$EjemploHashBcryptParaUsuario12345678901234567890123";

const profe = {
  _id: new ObjectId(),
  username: "profe",
  email: "profe@tareas.dev",
  password: hashAdmin,
  role: "admin",
  createdAt: now,
  updatedAt: now,
};

const ana = {
  _id: new ObjectId(),
  username: "ana",
  email: "ana@ejemplo.com",
  password: hashUser,
  role: "user",
  createdAt: now,
  updatedAt: now,
};

const bea = {
  _id: new ObjectId(),
  username: "bea",
  email: "bea@ejemplo.com",
  password: hashUser,
  role: "user",
  createdAt: now,
  updatedAt: now,
};

const carlos = {
  _id: new ObjectId(),
  username: "carlos",
  email: "carlos@ejemplo.com",
  password: hashUser,
  role: "user",
  createdAt: now,
  updatedAt: now,
};

db.users.insertMany([profe, ana, bea, carlos]);

const tareaAna1 = {
  _id: new ObjectId(),
  task: "Terminar modelos y validaciones en Mongoose",
  status: "en_curso",
  dueDate: new Date("2026-12-03T18:00:00.000Z"),
  owner: ana._id,
  checklist: [
    { _id: new ObjectId(), text: "Definir esquema de User", done: true },
    { _id: new ObjectId(), text: "Embeber checklist en Task", done: true },
    { _id: new ObjectId(), text: "Revisar enums y longitudes", done: false },
  ],
  createdAt: now,
  updatedAt: now,
};

const tareaBea1 = {
  _id: new ObjectId(),
  task: "Probar endpoints de auth y permisos",
  status: "pendiente",
  dueDate: new Date("2026-12-05T20:00:00.000Z"),
  owner: bea._id,
  checklist: [
    { _id: new ObjectId(), text: "Registrar usuario y hacer login", done: true },
    { _id: new ObjectId(), text: "Comprobar respuestas 401 y 403", done: false },
  ],
  createdAt: now,
  updatedAt: now,
};

const tareaCarlos1 = {
  _id: new ObjectId(),
  task: "Escribir tests unitarios sin base de datos",
  status: "hecha",
  dueDate: new Date("2026-11-29T15:00:00.000Z"),
  owner: carlos._id,
  checklist: [
    { _id: new ObjectId(), text: "Simular req, res y next", done: true },
    { _id: new ObjectId(), text: "Probar función de permisos", done: true },
  ],
  createdAt: now,
  updatedAt: now,
};

const tareaProfe1 = {
  _id: new ObjectId(),
  task: "Revisar rúbrica y memoria del proyecto",
  status: "pendiente",
  dueDate: new Date("2026-12-10T12:00:00.000Z"),
  owner: profe._id,
  checklist: [
    { _id: new ObjectId(), text: "Verificar roles admin y user", done: false },
    { _id: new ObjectId(), text: "Leer justificación de checklist embebida", done: false },
  ],
  createdAt: now,
  updatedAt: now,
};

db.tasks.insertMany([tareaAna1, tareaBea1, tareaCarlos1, tareaProfe1]);
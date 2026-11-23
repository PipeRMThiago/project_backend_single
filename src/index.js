import express from "express";
import router from "./routes/router.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded());



app.use("/",router);

app.listen(3001,()=>{
    console.log("app en marcha en el puerto 3001");
})


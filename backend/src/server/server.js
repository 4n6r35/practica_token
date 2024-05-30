import express from "express";
import cors from "cors";
import "dotenv/config";
import { connection } from "../database/config.js";
import { userRouter } from "../routes/user.js";

const paths = {
  user: "/api/user",
};
export class Server {
  constructor() {
    this.app = express();
    this.port = process.env.REST_PORT;

    //Conectar Base de datos
    this.ConectarDB();
    //Middlewares
    this.middlewares();
    //Rutas de app
    this.routes();
  }

  async ConectarDB() {
    await connection();
  }

  middlewares() {
    //CORS
    this.app.use(cors());
    //Lectura y parseo del body
    this.app.use(express.json());
    //Directorio Público
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(paths.user, userRouter);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", this.port);
    });
  }
}

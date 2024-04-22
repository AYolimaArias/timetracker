import express from "express";
import userRouter from "./routers/users-router";
import bodyParser from "body-parser";
const morgan = require("morgan");

// pg

const app = express();
const port = 3500;
// Middleware JSON
app.use(express.json());
app.use(bodyParser.json());
//Middleware libreria externa
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

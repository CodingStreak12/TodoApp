import express from "express";
import {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  getSingleTodo,
} from "../controllers/todoControllers.js";

const routes = express.Router();

/* name of routes: 
get: /, post: /, patch: /:id, delete: /:id, get: /:id */

routes.get("/", getAllTodos);

routes.post("/", createTodo);
routes.patch("/:id", updateTodo);
routes.delete("/:id", deleteTodo);
routes.get("/:id", getSingleTodo);
export default routes;

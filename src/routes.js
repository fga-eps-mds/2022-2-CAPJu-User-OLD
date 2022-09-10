import { Router } from "express";
import UserController from "./controllers/UserController.js";
import { protect, authRole } from "./middleware/authMiddleware.js";
import { ROLE } from "./schemas/role.js";

const routes = Router();

routes.get("/user", UserController.user);
routes.post("/newUser", UserController.createUser);
routes.get(
  "/allUser",
  protect,
  authRole([ROLE.DIRETOR]),
  UserController.allUser
);
routes.post("/login", authRole([ROLE.DIRETOR]), UserController.login);
routes.post("/requestRecovery", UserController.requestRecoveryMail);
routes.post("/updatePassword", UserController.updatePassword);
routes.post("/acceptUser", UserController.acceptUser);
routes.put(
  "/updateRole",
  authRole([ROLE.DIRETOR]),
  UserController.editRoleUser
);

export default routes;

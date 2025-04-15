import express from "express";
import { protect, admin } from "../middleware/authMiddleware.js";
import { getUsers, deleteUser, updateUser } from "../controllers/adminController.js";

const router = express.Router();

router.get("/users", protect, admin, getUsers);
router.delete("/users/:id", protect, admin, deleteUser);
router.put("/users/:id", protect, admin, updateUser);

export default router;

import express from "express"
import {
  getGoals,
  setGoal,
  deleteGoal,
  updateGoal,
} from "../controllers/goalsController.js"
import { protect } from "../middleware/authMiddleware.js"

const router = express.Router()

router.route("/").get(protect, getGoals).post(protect, setGoal)
router.route("/:id").put(protect, updateGoal).delete(protect, deleteGoal)

export default router

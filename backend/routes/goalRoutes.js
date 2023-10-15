import express from "express"
import {getGoals,setGoal,deleteGoal,updateGoal} from "../controllers/goalsController.js"


const router = express.Router()

router.route ('/').get(getGoals).post(setGoal)
router.route('/:id').put(updateGoal).delete(deleteGoal)




export default router
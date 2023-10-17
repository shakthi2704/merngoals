import { useDispatch } from "react-redux"
import { deleteGoal } from "../store/goals/goalSlice"

const capitalizeFirstLetter = (text) => {
  return text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

const GoalItem = ({ goal }) => {
  const dispatch = useDispatch()

  return (
    <div className="goal">
      <div>{new Date(goal.createdAt).toLocaleString("en-US")}</div>
      <h2>{capitalizeFirstLetter(goal.text)}</h2>
      <button onClick={() => dispatch(deleteGoal(goal._id))} className="close">
        X
      </button>
    </div>
  )
}

export default GoalItem

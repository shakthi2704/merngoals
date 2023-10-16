import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import GoalForm from "../components/GoalForm"
import GoalItem from "../components/GoalItem"
import Spinner from "../components/Spinner"

const Dashboard = () => {
  return (
    <>
      <section className="heading">
        <h1>Welcome </h1>
        <p>Goals Dashboard</p>
      </section>
      <GoalForm />
      <section className="content">
        <GoalItem />
        <h3>You have not set any goals</h3>
      </section>
    </>
  )
}

export default Dashboard

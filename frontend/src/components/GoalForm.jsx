import { useState } from "react"
import { useDispatch } from "react-redux"

const GoalForm = () => {
  const [text, setText] = useState("")
  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input type="text" name="text" id="text" />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Add Goal
          </button>
        </div>
      </form>
    </section>
  )
}

export default GoalForm

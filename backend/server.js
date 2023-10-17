import path from "path"
import express from "express"
import colors from "colors"
import dotenv from "dotenv"
import { errorHandler } from "./middleware/errorMiddleware.js"
import connectDB from "./config/db.js"
import goalRoutes from "./routes/goalRoutes.js"
import userRoutes from "./routes/userRoutes.js"

const app = express()
dotenv.config()
connectDB()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/api/goals", goalRoutes)
app.use("/api/users", userRoutes)
// Serve frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")))

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "dist", "index.html")
    )
  )
} else {
  app.get("/", (req, res) => res.send("Please set to production"))
}

app.use(errorHandler)

app.listen(port, () => console.log(`server is running on port ${port}`))

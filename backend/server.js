import path from "path"
import express  from "express"
import colors from "colors"
import dotenv from "dotenv"
import {errorHandler} from "./middleware/errorMiddleware.js"

import goalRoutes from "./routes/goalRoutes.js"


dotenv.config()

const port = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/goals',goalRoutes)


app.use(errorHandler)

app.listen(port,()=>console.log(`server is running on port ${port}`))
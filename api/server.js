import express, { Router } from 'express'

// Routes
import indexRoute from './src/api/routes'
import EnttiTiesRoute from './src/api/routes/Entities'

const app = express()

const PORT = 9000

// connectToDb()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', indexRoute)
app.use('/entities', EnttiTiesRoute);

app.listen(PORT, () => { 
	console.log(`Server is running on port : ${PORT}`)
})
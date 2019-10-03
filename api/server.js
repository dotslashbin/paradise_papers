import express, { Router } from 'express'
var cors = require('cors')

// Routes
import indexRoute from './src/api/routes'
import EntitiesRoute from './src/api/routes/Entities'

const app = express()
app.use(cors())

const PORT = 9000

// connectToDb()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/', indexRoute)
app.use('/entities', EntitiesRoute);

app.listen(PORT, () => { 
	console.log(`Server is running on port : ${PORT}`)
})
import express from 'express'
const app=express()
import bodyParser from 'body-parser'

import router from './router/todo'
app.use(bodyParser.json())
app.use(router)
app.listen(3000)
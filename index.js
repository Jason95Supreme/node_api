const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const fileRouter = require('./files/load-file')
// const path = require('path')
// const fs = require('fs')
const port = 3000

app.use('/file', fileRouter);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
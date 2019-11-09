const express = require('express')
const app = express()
const fileRouter = require('./files/load-file')
// const path = require('path')
// const fs = require('fs')


app.use('/file', fileRouter);
app.listen(3000, () => console.log('Example app listening on port 3000!'))
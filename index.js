const express = require('express')
const app = express()
// app.use('/', function() {
//     console.log('访问中。。。')
// })

app.get('/', function(req, res) {
    // res.send('hello')
    res.json('hh')
    console.log('我是get方法')
})
app.listen(3000, () => console.log('Example app listening on port 3000!'))
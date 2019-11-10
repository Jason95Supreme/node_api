const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()


router.get('/', function(req, res, next) {

});
router.post('/post', jsonParser, function(req, res, next) {
  console.log("post:", req)
  res.header("Access-Control-Allow-Origin", "*")
  res.json({
    name: "收到了",
  })
});

module.exports = router
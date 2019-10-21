const express = require('express')
const app = express()
const router = express().router()
const path = require('path')
const fs = require('fs')

router.use(function(req, res, next) {
    // .. some logic here .. like any other middleware
    next();
  });
  
  // will handle any request that ends in /events
  // depends on where the router is "use()'d"
router.get('/events', function(req, res, next) {
// ..
});

app.use('/calendar', router);
app.listen(3000, () => console.log('Example app listening on port 3000!'))
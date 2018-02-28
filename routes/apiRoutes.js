var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/person', function(request, response) {
  var newPerson = request.body
  console.log(request.body)
  console.log(newPerson)
  newPerson.added = true
  response
    .json(newPerson)
})

module.exports = router;
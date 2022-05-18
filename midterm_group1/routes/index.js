var express = require('express');
var router = express.Router();
const io = require('socket.io')
const { uuid } = require("uuidv4");

const roomID = uuid();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("home", {roomID});
});


router.get('/room/:id', function (req, res, next) {
  res.render('room', {roomID: req.params.id})
})


module.exports = router;

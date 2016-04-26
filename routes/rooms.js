'use strict';

var express = require('express');
var router = express.Router();

var Item = require('../models/item');
var Room = require('../models/room');

//   /api/rooms
router.route('/')
  .get((req, res) => {

    Room.get((err, rooms) => {
      if(err) {
        return res.status(400).send(err);
      }

      res.send(rooms);
    });
  })
  .post((req, res) => {
    // req.body  -->  { desc: ??, dueDate: ?? }
    Room.create(req.body, err => {
      if(err) {
        return res.status(400).send(err);
      }
      res.send();
    });
  });

module.exports = router;

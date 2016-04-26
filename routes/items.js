'use strict';

var express = require('express');
var router = express.Router();

var Item = require('../models/item');
var Room = require('../models/room');

//   /api/items
router.route('/')
  .get((req, res) => {

    Item.get((err, items) => {
      if(err) {
        return res.status(400).send(err);
      }
      res.send(items);
    });
  })
  .post((req, res) => {
    // req.body  -->  { desc: ??, dueDate: ?? }
    Item.create(req.body, err => {
      if(err) {
        return res.status(400).send(err);
      }
      res.send();
    });
  })
  .delete((req, res) => {
    // req.body  -->  { desc: ??, dueDate: ?? }
    Item.delete(req.body, err => {
      if(err) {
        return res.status(400).send(err);
      }
      res.send();
    });
  });

module.exports = router;

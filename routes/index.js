'use strict';

var express = require('express');
var router = express.Router();

var moment = require('moment');
var Item = require('../models/item');
var Room = require('../models/room');

//  GET /
router.get('/', (req, res) => {
  Item.get((err, items) => {
    if(err) {
      res.render('error', {error: err})
    } else {

      // items = items.map(item => {
      //   item.dueDate = moment(item.dueDate, 'X').format('l');
      //   item.createdAt = moment(item.createdAt, 'X').format('l');
      //   return item;
      // })

      res.render('home', {rooms: rooms});
    }
  })
})

//  GET /
router.get('/', (req, res) => {
  Item.get((err, items) => {
    if(err) {
      res.render('error', {error: err})
    } else {

      // items = items.map(item => {
      //   item.dueDate = moment(item.dueDate, 'X').format('l');
      //   item.createdAt = moment(item.createdAt, 'X').format('l');
      //   return item;
      // })

      res.render('home', {items: items});
    }
  })
})

module.exports = router;

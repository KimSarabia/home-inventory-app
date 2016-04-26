'use strict';

var express = require('express');
var router = express.Router();

var moment = require('moment');
var Item = require('../models/item');
var Room = require('../models/room');

//  GET /
router.get('/', (req, res) => {
  Room.get((err, rooms) => {
    if(err) {
      res.render('error', {error: err})
    } else {
      Item.get((err, items) => {

      // items = items.map(item => {
      //   item.dueDate = moment(item.dueDate, 'X').format('l');
      //   item.createdAt = moment(item.createdAt, 'X').format('l');
      //   return item;
      // })

      res.render('home', {rooms: rooms, items: items});
    })
  }
})
})
//  GET /
router.get('/whatever', (req, res) => {
  Item.get((err, items) => {
    if(err) {
      res.render('error', {error: err})
    } else {

      // items = items.map(item => {
      //   item.dueDate = moment(item.dueDate, 'X').format('l');
      //   item.createdAt = moment(item.createdAt, 'X').format('l');
      //   return item;
      // })
      console.log("I TEMS", items);
      res.render('home', {"items": items});
    }
  })
})

module.exports = router;

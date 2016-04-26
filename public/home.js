'use strict';


$(()=>{

  $('.newItem').click(openNewItemModal);
  $('.deleteItem').click(deleteItem);
  $('form.newItemForm').submit(createNewItem);
  $('.newRoom').click(openNewRoomModal);
  $('form.newRoomForm').submit(createNewRoom);

});

function createNewItem(e) {
  e.preventDefault();

  var newItem = {
    item_name: $('#newItemName').val(),
    item_value: $('#newItemValue').val(),
    item_room: $('#newItemRoom').val()
  };

  $('#newItemName').val('');
  $('#newItemValue').val('');
  $('#newItemRoom').val('');

  $.post('/api/items', newItem)
    .done(() => {
      // rerender the DOM
      $('.modal').modal('hide');
    })
    .fail(err => {
      console.error('ERROR!!!!', err);
    });
}

function deleteItem(e) {
  e.preventDefault();

  $.delete(`api/items/${item.id}`).then(res => {
      console.log("Successfully deleted");
  }, err => {
      if (err) {
          console.log(err);
      }
  });
}

// router.delete('/:id',function(req,res,next){
//   db.query('DELETE FROM questions WHERE ?', {id:req.params.id}, function(err,result){
//     if(err){
//       res.status(400).send(err);
//       return;
//     }
//     res.send(result);
//   });
// });

function createNewRoom(e) {
  e.preventDefault();

  var newRoom = {
    room_type: $('#newRoomType').val()
  };

  $('#newRoomType').val('');

  $.post('/api/rooms', newRoom)
    .done(() => {
      // rerender the DOM
      $('.roomModal').modal('hide');
    })
    .fail(err => {
      console.error('ERROR!!!!', err);
    });
}

function openNewItemModal() {
  $('.modal').modal('show');
}

function openNewRoomModal() {
  $('.roomModal').modal('show');
}

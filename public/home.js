'use strict';


$(()=>{

  $('.newItem').click(openNewItemModal);
  $('form.newItemForm').submit(createNewItem);
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

function createNewRoom(e) {
  e.preventDefault();

  var newRoom = {
    room_type: $('#newRoomType').val()
  };

  $('#newRoomType').val('');

  $.post('/api/rooms', newRoom)
    .done(() => {
      // rerender the DOM
      $('.modal').modal('hide');
    })
    .fail(err => {
      console.error('ERROR!!!!', err);
    });
}

function openNewItemModal() {
  $('.modal').modal('show');
}

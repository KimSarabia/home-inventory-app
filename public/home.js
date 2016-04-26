'use strict';


$(()=>{

  $('.newItem').click(openNewItemModal);
  $('form.newItemForm').submit(createNewItem);
});

function createNewItem(e) {
  e.preventDefault();

  var newItem = {
    desc: $('#newItemDesc').val(),
    dueDate: $('#newItemDueDate').val(),
  };

  $('#newItemDesc').val('');
  $('#newItemDueDate').val('');

  $.post('/api/items', newItem)
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

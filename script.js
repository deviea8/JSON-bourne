//Mission 1
$('#mission_one_btn').on('click', function() {
  $('#mission_status').text('In Progress');
  $.get('https://api.myjson.com/bins/1680y')
    .done(function(data) {
      $('#mission_status').text('Complete');
      console.log(data.item);
      console.log(data.message);
      console.log(data.passphrase)
    });
});


//Mission 2
var retrievePassphrase = function() {
$('#mission_status').text('In Progress');
$.get('https://api.myjson.com/bins/1680y')
  .then(function(info){
    createJSON(info);
})
  .catch(function(error){
    console.log('error');
  });
};

var createJSON = function() {
  $.ajax({
    url:"https://api.myjson.com/bins",
    type:"POST",
    data:'{"passphrase":"lemonchiffon"}',
    contentType:"application/json; charset=utf-8",
    dataType:"json",
    success: function(data, textStatus, jqXHR){
      console.log('The passphrase can be accessed at this URL: ' + data.uri);
      $('#mission_status').text('Complete');
    }
});
}

$('#mission_two_btn').on('click', retrievePassphrase);


//Mission 3
$('#mission_three_btn').on('click', function() {
  $('#mission_status').text('In Progress');
  $.get('https://api.myjson.com/bins/3te1c')
    .done(function(data) {
      console.log(data);
      $('#mission_status').text('Complete');
    });
});


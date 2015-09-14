$(document).on('ready', function() {
  $('#updateExercise').hide();
  showAllExercises();
});


//add Exercise
$('#addExercise').on('submit', function(event){
  event.preventDefault();
  var payload = {
    name:$('#exerciseName').val().trim(),
    description:$('#exerciseDescription').val().trim(),
    tags:$('#exerciseTags').val().trim()
  };
  $.post('/api/v1/exercises', payload, function(data){
    $(':input', 'form').val('');
  });
  showAllExercises();
  $('#myModal').modal('toggle');
});

//get one exercise to edit
$(document).on('click', '.update-button', function(event){
  event.preventDefault();
  $.get('/api/v1/exercise/'+ $(this).attr('id'), function(data){
    $('#updateName').val(data.name);
    $('#updateDescription').val(data.description);
    $('#updateTags').val(data.tags);
    $('.putExercise').attr('id', data._id);
  });
  $('#exerciseInfo').hide();
  $('#updateExercise').show();
});

//update exercise
$(document).on('click', '.putExercise', function(event){
  event.preventDefault();
  var payload = {
    name:$('#updateName').val().trim(),
    description:$('#updateDescription').val().trim(),
    tags:$('#updateTags').val().trim()
  };
  $.ajax({
    method:'PUT',
    url:'/api/v1/exercise/' + $(this).attr('id'),
    data:payload
  }).done(function(data){
    showAllExercises();
    $('#updateExercise').hide();
    $('#exerciseInfo').show();

  });
});




//delete exercise
$(document).on('click', '.delete-button', function(){
  $.ajax({
    method: "DELETE",
    url:'/api/v1/exercise/' +$(this).attr('id')
  }).done(function(data){
    showAllExercises();
    });

});


//show all exercises
function showAllExercises(){
  $.get('/api/v1/exercises', function(data){
    $('#exerciseTable').html('');
    for (var i = 0; i < data.length; i++) {
      $('#exerciseTable').append(
        '<tr><td>' + data[i].name + '</td>' +
        '<td>' + data[i].description + '</td>' +
        '<td>' + data[i].tags + '</td>' +
        '<td><a class="btn btn-danger btn-xs delete-button" id="'+data[i]._id +'" role="button">Delete</a>'+
          '&nbsp;&nbsp;<a class="btn btn-primary btn-xs update-button" id="'+data[i]._id+'" role="button">Edit</a></td>'+
          '</tr>');
      }
  });
}

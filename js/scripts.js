$(document).ready(function(){
  $("form#task").submit(function(event){
    event.preventDefault();

    var inputtedTask = $("input#task-name").val();
    var task = { name: inputtedTask };

    $("ul.tasks").append("<li><span class='addedTask'>" + task.name + "</span></li>");

    $("input#task-name").val("");
  });
});

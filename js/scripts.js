$(document).ready(function(){
  $("form#task").submit(function(event){
    event.preventDefault();

    var inputtedTask = $("input#task-name").val();
    var inputtedDate = $("input#due-date").val();

    var task = { name: inputtedTask, date: inputtedDate };

    $("tbody.tasks").append("<tr>" + "<td class='tasks'>" + task.name + "</td>" + "<td class='due'>" + task.date + "</td>" + "<td>" + "<input type='checkbox'>" + "</tr>");



    $("input#task-name").val("");
  });
  $("button#clear").click(function(){
    $("tbody.tasks").empty();
  });
});

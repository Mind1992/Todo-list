$(document).ready(function(){
  $("form#task").submit(function(event){
    event.preventDefault();

    var inputtedTask = $("input#task-name").val();
    var inputtedDate = $("input#due-date").val();

    var task = { name: inputtedTask, date: inputtedDate };

    $("tbody.tasks").append("<tr>" + "<td class='task'>" + task.name + "</td>" + "<td class='due'>" + task.date + "</td>" + "<td class='check'>" + "<input type='checkbox'>" + "</tr>");

    $("input#task-name").val("");
  });

  $("button#clear").click(function(){
    $("td.task").remove();
    alert("task");
    $("td.due").remove();
    alert("due");
    $("td.check").remove();
    alert("check");
  });

});

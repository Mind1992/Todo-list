$(document).ready(function(){
  $("form#task").submit(function(event){
    event.preventDefault();

    var inputtedTask = $("input#task-name").val();
    var inputtedDate = $("input#due-date").val();
    var checkedStatus = $("input.checkbox").val();

    var task = { name: inputtedTask, date: inputtedDate, status: checkedStatus };
    console.log(task);

    $("tbody.tasks").append("<tr>" + "<td class='tasks'>" + task.name + "</td>" + "<td class='due'>" + task.date + "</td>" + "<td>" + "<input type='checkbox' class='checkbox'>" + "</td>" + "</tr>");
    $("input#task-name").val("");
    $("input#due-date").val("");

    $("input.checkbox").click(function() {
      $(this).closest("tr").fadeOut();
    });
  });

  $("button#clear").click(function(){
    $("tbody.tasks").empty();
  });

});

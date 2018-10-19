$(document).ready(function(){
  $("#survey").submit(function(event){
    event.preventDefault();

    var userage = parseInt($("#age").val());
    var usergender = $("#gender").val();
    var userskill = parseInt($("#skill").val());
    if ((usergender === 'male') && (userage === 30)){

      $("#java").show()
    }
    });
  });

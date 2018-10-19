$(function(){
  $("#survey").submit(function(event){
    event.preventDefault();

    var userage = $("#age").val();
    var usergender = $("#gender").val();
    var userskill = $("#skill").val();
    // if (userage >= 30){
      $("#java").show();
    });
  });

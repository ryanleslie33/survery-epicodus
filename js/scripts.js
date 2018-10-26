$(document).ready(function(){
  $("#survey").submit(function(event){
    event.preventDefault();



    var userage = parseInt($("#age").val());
    var usergender = $("#gender").val();
    var userskill = parseInt($("#skill").val());
    var motivation = parseInt($("#motive").val());
    var school = parseInt($("#school").val());
    if ((usergender === 'male' || 'female') && (userage <= 30) && (userskill <= 4 )) {
      $("#ruby").show();
      $("#c-sharp").hide();
      $("#html").hide();
      $("#java").hide();
    }else if (userskill >= 2){
      $("#c-sharp").show()
      $("#c-sharp").html(" c-sharp <img src='img/cc.png' alt='code language'>");
      $("#ruby").hide();
      $("#html").hide();
      $("#java").hide();
    }
    if ((userage >= 40) && (userskill <= 1) || (motivation <= 1)){
      $("#html").show()
      $("#html").html(" html <img src='img/html.png' alt='code language'>");
      $("#java").hide();
      $("$c-sharp").hide();
      $("#ruby").hide();
    }else if ((userage <= 50) && (userskill > 1) && (usergender === 'female')){
      $("#java").show()
      $("#c-sharp").hide()
      $("#ruby").hide();
      $("#html").hide();
$("#java").html(" javascript <img src='img/java.jpg' alt='asdfasdf'>");
    }
    if ((school >= 4) && (userskill >= 4)){
        $("#c-sharp").html(" c-sharp <img src='img/cc.png' alt='code language'>");
        $("#c-sharp").show();
        $("#ruby").hide();
        $("#java").hide();
        $("#html").hide();
    }

  });
});
$(document).ready(function(){
  $("#john").submit(function(event){
    event.preventDefault();
    var userName = $("#name").val();
    var userdate = $("#dates").val();
$("#answers").show();
$("#").text(userName);
$("#dates").text(userdate);

});
});

    // $("#userName").text(userName);
    // $("#appointmentDate").text(userdate);

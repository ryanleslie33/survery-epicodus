$(document).ready(function(){
  $("#survey").submit(function(event){
    event.preventDefault();

    var userage = parseInt($("#age").val());
    var usergender = $("#gender").val();
    var userskill = parseInt($("#skill").val());
    var motivation = parseInt($("#motive").val());
    var school = parseInt($("#school").val());
    if ((usergender === 'male') && (userage <= 30) && (userskill <= 4 )) {
      $("#ruby").show()
    }else if (userskill >= 2){
      $("#c-sharp").show()
      $("#c-sharp").html(" c-sharp <img src='img/cc.png' alt='code language'>");
    }
    if ((userage >= 40) && (userskill <= 1)) || (motivation <= 1){
      $("#html").show()
      $("#html").html(" html <img src='img/html.png' alt='code language'>");
    }else if ((userage <= 50) && (userskill > 1) && (usergender === 'female')){
      $("#java").show()
      $("#c-sharp").hide()
$("#java").html(" javascript <img src='img/java.jpg' alt='asdfasdf'>");
    }
    if ((school >= 4) && (userskill >= 4)){
        $("#c-sharp").html(" c-sharp <img src='img/cc.png' alt='code language'>");
        $("#c-sharp").show()
        $("#ruby").hide()
    }


  });
});
$(document).ready(function(){
  $(".counsler").submit(function(event){
    event.preventDefault();
    var userName = $("#name").val();
    var userdate = $("#dates").val();


    $("#outputAppointment").show();
    $("#userName").text(userName);
    $("#appointmentDate").text(userdate);

});
});
